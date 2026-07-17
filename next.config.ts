import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // GitHub Pages has no runtime image optimizer. Source assets are resized
    // and encoded as WebP before they are committed to the static export.
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: "/ryugege_text",
        assetPrefix: "/ryugege_text/",
      }
    : {}),
};

export default nextConfig;
