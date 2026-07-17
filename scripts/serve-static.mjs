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
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

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
  const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
  const filePath = await findFile(url.pathname);

  if (!filePath) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Cache-Control": filePath.endsWith(".html")
      ? "no-cache"
      : "public, max-age=31536000, immutable",
    "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, host, () => {
  console.log(`Static export ready at http://localhost:${port}`);
});
