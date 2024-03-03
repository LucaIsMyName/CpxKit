interface Storage {
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

export const Storage: Storage = {
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
