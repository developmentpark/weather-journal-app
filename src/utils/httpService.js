export default {
  get: async function (url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error({ status: res.status, text: res.text });
    }
    return await res.json();
  },

  post: async function (url, data) {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error({ status: res.status, text: res.text });
    }
    return await res.json();
  },
};
