import geolocationService from "./geolocationService.js";
import httpService from "../../utils/httpService.js";
import { objectToQuery } from "../../utils/query.js";
import { renderWeatherView } from "./weatherView.js";
import { renderListView } from "./listView.js";
import { getEl } from "../utils/dom.js";

const API = process.env.API;

function getWeather(queryParams) {
  const path = "/weather";
  const query = objectToQuery(queryParams);
  return httpService.get(API + path + query);
}

function saveEntity(entity) {
  return httpService.post(API, entity);
}

function getAllEntities() {
  return httpService.get(API);
}

function getCurrentEntity() {
  const city = getEl("weather__city-value").textContent;
  const temp = getEl("weather__temp-value").textContent;
  const humidity = getEl("weather__humidity-value").textContent;
  const windSpeed = getEl("weather__wind-speed-value").textContent;
  const feeling = getEl("box-feeling__text-area").value;
  const description = getEl("weather__desc").textContent;
  const icon = getEl("weather__image").src;
  return {
    city,
    temp,
    humidity,
    windSpeed,
    feeling,
    description,
    icon,
  };
}

async function publish() {
  const entity = getCurrentEntity();
  saveEntity(entity)
    .then(() => getAllEntities())
    .then((entities) => renderListView(entities))
    .catch((error) => console.log(error.message));
}

function init() {
  getAllEntities()
    .then((entities) => renderListView(entities))
    .catch((error) => console.log(error.message));
  geolocationService
    .getCoords()
    .then((coords) => getWeather(coords))
    .then((data) => renderWeatherView(data))
    .catch((error) => console.log(error.message));
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  getEl("box-feeling__publish-btn").addEventListener("click", publish);
  getEl("search-box__button").addEventListener("click", () => {
    const zip = getEl("search-box__input").value;
    const zipFormat = /^[0-9]{5}$/;
    if (zipFormat.test(zip.trim())) {
      getWeather({ zip })
        .then((data) => renderWeatherView(data))
        .catch((error) => console.log(error.message));
    }
  });
});
