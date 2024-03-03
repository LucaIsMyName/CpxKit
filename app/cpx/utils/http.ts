export const Http = {
  fetch: async (url: string, options: any) => {
    const response = await fetch(url, options);
    return response.json();
  },
  xhr: (url: string, options: any) => {
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
  post: async (url: string, data: Object) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  put: async (url: string, data: Object) => {
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
  patch: async (url: string, data: Object) => {
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
