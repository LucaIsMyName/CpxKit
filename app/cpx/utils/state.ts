/**
 * State is managed via the URL SearchParams API
 */
interface State {
  set: (key: string, value: string) => void;
  get: (key: string) => string | null;
  has: (key: string) => boolean;
  hasNot: (key: string) => boolean;
  delete: (key: string) => void;
}

export const State: State = {
  set: (key, value) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, "", url);
  },
  get: (key) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(key);
  },
  has: (key) => {
    const url = new URL(window.location.href);
    return url.searchParams.has(key);
  },
  hasNot: (key) => {
    const url = new URL(window.location.href);
    return !url.searchParams.has(key);
  },
  delete: (key) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(key);
    window.history.pushState({}, "", url);
  },
};
