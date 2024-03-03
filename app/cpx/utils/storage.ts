export const Storage = {
  Local: {
    /**
     *
     * @param {String} key
     * @returns
     */
    get: (key: string) => {
      return localStorage.getItem(key);
    },
    /**
     *
     * @param {String} key
     * @param {String} value
     */
    set: (key: string, value: string) => {
      localStorage.setItem(key, value);
    },

    has: (key: string) => {
      return localStorage.getItem(key) !== null;
    },

    hasNot: (key: string) => {
      return localStorage.getItem(key) === null;
    },
  },
  Session: {
    /**
     *
     * @param {String} key
     * @param {String} value
     */
    get: (key: string) => {
      return sessionStorage.getItem(key);
    },
    /**
     *
     * @param {String} key
     * @param {String} value
     */
    set: (key: string, value: string) => {
      sessionStorage.setItem(key, value);
    },

    has: (key: string) => {
      return sessionStorage.getItem(key) !== null;
    },

    hasNot: (key: string) => {
      return sessionStorage.getItem(key) === null;
    },
  },
};
