import geolocationService from "./geolocationService.js";
import httpService from "./httpServiceFake.js";

function objectToQuery(object) {
  return Object.entries(object).reduce((acum, curr, idx, arr) => {
    acum += `${curr[0]}=${curr[1]}`;
    if (idx < arr.length - 1) {
      acum += "&";
    }
    return acum;
  }, "?");
}

const API = "http://localhost:34343/api";

function getWeather(coords) {
  const path = "/weather";
  const query = objectToQuery(coords);
  const url = API + path + query;
  console.log(url);
  return httpService.get(API + path + query);
}

function init() {
  geolocationService
    .getCoords()
    .then((coords) => getWeather(coords))
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));
}

document.addEventListener("DOMContentLoaded", init);
