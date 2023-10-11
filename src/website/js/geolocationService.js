function getCoords() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        resolve(coords);
      }, reject);
    } else {
      reject(new Error("Geolocation is not available in this browser."));
    }
  });
}

export default { getCoords };
