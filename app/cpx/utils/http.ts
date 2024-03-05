interface HttpInterface {
  fetch: (url: string) => Promise<any>;
  xhr: (url: string, options: any) => Promise<any>;
  post: (url: string, data: Object) => Promise<any>;
  put: (url: string, data: Object) => Promise<any>;
  delete: (url: string) => Promise<any>;
  patch: (url: string, data: Object) => Promise<any>;
}
/**
 * Http
 * @description
 * Http functions for making requests to a server.
 * @example
 * const data = await Http.fetch("https://api.example.com/data");
 * const response = await Http.xhr("https://api.example.com/data", { method: "GET" });
 * const result = await Http.post("https://api.example.com/data", { key: "value" });
 * const result = await Http.put("https://api.example.com/data", { key: "value" });
 */
export const Http: HttpInterface = {
  fetch: async (url: string) => {
    const response = await fetch(url);
    return response.json();
  },
  xhr: (url, options) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method, url);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
          });
        }
      };
      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      };
      xhr.send();
    });
  },
  post: async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  put: async (url, data) => {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  delete: async (url) => {
    const response = await fetch(url, {
      method: "DELETE",
    });
    return response.json();
  },
  patch: async (url, data) => {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
