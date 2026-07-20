import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";

const root = resolve(process.cwd(), "out");
const port = Number.parseInt(process.env.PORT ?? "3000", 10);
const host = process.env.HOST ?? "0.0.0.0";
const basePath = process.env.BASE_PATH ?? "/ryugege_text";

const contentTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

function getCacheControl(filePath) {
  if (filePath.endsWith(".html")) {
    return "no-cache";
  }

  const nextStaticSegment = `${sep}_next${sep}static${sep}`;
  if (filePath.includes(nextStaticSegment)) {
    return "public, max-age=31536000, immutable";
  }

  // Public files keep stable names, so they must be revalidated after a deploy.
  return "public, max-age=0, must-revalidate";
}

function parseByteRange(rangeHeader, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader);
  if (!match || (!match[1] && !match[2])) {
    return null;
  }

  const startToken = match[1];
  const endToken = match[2];
  let start;
  let end;

  if (!startToken) {
    const suffixLength = Number.parseInt(endToken, 10);
    if (!Number.isFinite(suffixLength) || suffixLength <= 0) {
      return null;
    }
    start = Math.max(0, size - suffixLength);
    end = size - 1;
  } else {
    start = Number.parseInt(startToken, 10);
    end = endToken ? Number.parseInt(endToken, 10) : size - 1;
  }

  if (
    !Number.isFinite(start) ||
    !Number.isFinite(end) ||
    start < 0 ||
    end < start ||
    start >= size
  ) {
    return null;
  }

  return { start, end: Math.min(end, size - 1) };
}

async function findFile(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const publicPath = decodedPath.startsWith(`${basePath}/`)
    ? decodedPath.slice(basePath.length)
    : decodedPath;
  const relativePath = publicPath.replace(/^\/+/, "");
  const requestedPath = resolve(root, relativePath);

  if (requestedPath !== root && !requestedPath.startsWith(`${root}${sep}`)) {
    return null;
  }

  try {
    const requestedStat = await stat(requestedPath);
    if (requestedStat.isDirectory()) {
      return resolve(requestedPath, "index.html");
    }
    return requestedPath;
  } catch {
    if (!extname(requestedPath)) {
      const indexPath = resolve(requestedPath, "index.html");
      try {
        await stat(indexPath);
        return indexPath;
      } catch {
        return null;
      }
    }
    return null;
  }
}

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, {
      Allow: "GET, HEAD",
      "Content-Type": "text/plain; charset=utf-8",
    });
    response.end("Method not allowed");
    return;
  }

  const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
  const filePath = await findFile(url.pathname);

  if (!filePath) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const fileStat = await stat(filePath);
  const extension = extname(filePath);
  const etag = `"${fileStat.size.toString(16)}-${Math.trunc(fileStat.mtimeMs).toString(16)}"`;
  const baseHeaders = {
    "Cache-Control": getCacheControl(filePath),
    "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
    ETag: etag,
    "Last-Modified": fileStat.mtime.toUTCString(),
  };

  if (!request.headers.range && request.headers["if-none-match"] === etag) {
    response.writeHead(304, baseHeaders);
    response.end();
    return;
  }

  const rangeHeader = request.headers.range;
  if (rangeHeader && extension === ".mp4") {
    const range = parseByteRange(rangeHeader, fileStat.size);
    if (!range) {
      response.writeHead(416, {
        ...baseHeaders,
        "Content-Range": `bytes */${fileStat.size}`,
      });
      response.end();
      return;
    }

    const contentLength = range.end - range.start + 1;
    response.writeHead(206, {
      ...baseHeaders,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Range": `bytes ${range.start}-${range.end}/${fileStat.size}`,
    });
    if (request.method === "HEAD") {
      response.end();
      return;
    }
    createReadStream(filePath, range).pipe(response);
    return;
  }

  response.writeHead(200, {
    ...baseHeaders,
    "Content-Length": fileStat.size,
    ...(extension === ".mp4" ? { "Accept-Ranges": "bytes" } : {}),
  });
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  createReadStream(filePath).pipe(response);
});

server.listen(port, host, () => {
  console.log(`Static export ready at http://localhost:${port}`);
});
