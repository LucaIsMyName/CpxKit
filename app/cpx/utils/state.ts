/**
 * State is managed via the URL SearchParams API
 */

export const State = {
  set: (key: string, value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, "", url);
  },
  get: (key: string) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(key);
  },
  has: (key: string) => {
    const url = new URL(window.location.href);
    return url.searchParams.has(key);
  },
  hasNot: (key: string) => {
    const url = new URL(window.location.href);
    return !url.searchParams.has(key);
  },
  delete: (key: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(key);
    window.history.pushState({}, "", url);
  },
};
