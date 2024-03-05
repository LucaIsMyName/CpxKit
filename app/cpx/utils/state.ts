/**
 * State is managed via the URL SearchParams API
 */
export interface StateInterface {
  set: (key: string, value: string) => void;
  get: (key: string) => string | null;
  has: (key: string) => boolean;
  hasNot: (key: string) => boolean;
  delete: (key: string) => void;
}
/**
 * State
 * @description
 * State is managed via the URL SearchParams API
 * @example
 * State.set("page", "home");
 */
export const State: StateInterface = {
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
