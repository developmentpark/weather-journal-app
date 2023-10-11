import geolocationService from "./geolocationService.js";
import httpService from "../../utils/httpService.js";
import { objectToQuery } from "../../utils/query.js";

const API = "http://localhost:9999/api";

function getWeather(coords) {
  const path = "/weather";
  const query = objectToQuery(coords);
  return httpService.get(API + path + query);
}

function init() {
  geolocationService
    .getCoords()
    .then((coords) => getWeather(coords))
    .then((data) => renderWeatherView(data))
    .catch((error) => console.log(error.message));
}

function getEl(className) {
  return document.querySelector("." + className);
}

const mpsToKmph = (mps) => 3.6 * mps;

const kelvinToCelcius = (kelvin) => kelvin - 272.15;

function renderWeatherView(weather) {
  const tempInCelsius = kelvinToCelcius(weather.main.temp);
  const windSpeedInKmph = mpsToKmph(weather.wind.speed);
  getEl("weather").outerHTML = weatherView({
    ...weather,
    temp: tempInCelsius,
    wind: {
      speed: windSpeedInKmph,
    },
  });
}

function weatherView(weather) {
  return `
    <div class="weather">
      <div class="weather__header">
        <img
          class="weather__image"
          src="https://openweathermap.org/img/wn/${
            weather.weather[0].icon
          }@2x.png"
        />
        <div class="weather__temp">
          <div class="weather__temp-value">${Math.round(weather.temp)}</div>
          <div class="weather__temp-unit">ºC</div>
        </div>
      </div>
      <div class="weather__body">
        <p class="weather__humidity">
          Humidity: <span class="weather__humidity-value">${
            weather.main.humidity
          }%</span>
        </p>
        <p class="weather__wind-speed">
          Wind: at <span class="weather__wind-speed-value">${Math.round(
            weather.wind.speed,
          )}km/h</span>
        </p>
      </div>
      <div class="weather__footer">
        <div class="weather__city">
          <svg class="icon icon_primary">
            <use xlink:href="./svg/icons.svg#location"></use>
          </svg>
          <span class="weather__city-value">${weather.name}</span>
        </div>
        <p class="weather__desc">${weather.weather[0].description}</p>
      </div>
    </div>
    `;
}

document.addEventListener("DOMContentLoaded", init);
