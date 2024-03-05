export interface StorageInterfaces {
  Local: {
    get: (key: string) => string | null;
    set: (key: string, value: string) => void;
    has: (key: string) => boolean;
    hasNot: (key: string) => boolean;
  };
  Session: {
    get: (key: string) => string | null;
    set: (key: string, value: string) => void;
    has: (key: string) => boolean;
    hasNot: (key: string) => boolean;
  };
}
/**
 * Storage
 * @description
 * Storage is managed via the LocalStorage and SessionStorage APIs
 * @example
 * Storage.Local.set("key", "value");
 * Storage.Local.get("key");
 */
export const Storage: StorageInterfaces = {
  Local: {
    get: (key) => {
      return localStorage.getItem(key);
    },
    set: (key, value) => {
      localStorage.setItem(key, value);
    },
    has: (key) => {
      return localStorage.getItem(key) !== null;
    },

    hasNot: (key) => {
      return localStorage.getItem(key) === null;
    },
  },
  Session: {
    get: (key) => {
      return sessionStorage.getItem(key);
    },
    set: (key, value) => {
      sessionStorage.setItem(key, value);
    },
    has: (key) => {
      return sessionStorage.getItem(key) !== null;
    },
    hasNot: (key) => {
      return sessionStorage.getItem(key) === null;
    },
  },
};
