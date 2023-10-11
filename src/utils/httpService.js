export default {
  get: async function (url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error({ status: res.status, text: res.text });
    }
    return await res.json();
  },
};
