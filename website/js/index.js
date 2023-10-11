import geolocationService from "./geolocationService.js";

function init() {
  geolocationService
    .getCoords()
    .then((coords) => console.log(coords))
    .catch((error) => console.warn(error.message));
}

document.addEventListener("DOMContentLoaded", init);
