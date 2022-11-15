export function lookup<T = unknown>(key: string, source: Record<string, T>) {
  return source[key];
}
