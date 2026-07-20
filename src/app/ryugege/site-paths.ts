export const siteBasePath =
  process.env.GITHUB_PAGES === "true" ? "/ryugege_text" : "";

export function withSiteBasePath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBasePath}${normalizedPath}`;
}

export function tripRouteHref(route: string) {
  return withSiteBasePath(`/ryugege/${route}/`);
}
