export function lookup<T = unknown>(key: string, source: Record<string, T>) {
  return source[key];
}

export function isCanonicalUrl(url: string): boolean {
  const ignore = 'karrotmarket.com';

  if (url.includes(ignore)) {
    return true;
  }

  const canonical = 'about.daangn.com';

  if (url.includes(canonical)) {
    return true;
  }

  return false;
}
