import conversions from "../utils/conversions.js";
import { getEl } from "../utils/dom.js";

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

function renderWeatherView(weather) {
  const tempInCelsius = conversions.kelvinToCelcius(weather.main.temp);
  const windSpeedInKmph = conversions.mpsToKmph(weather.wind.speed);
  getEl("weather").outerHTML = weatherView({
    ...weather,
    temp: tempInCelsius,
    wind: {
      speed: windSpeedInKmph,
    },
  });
}

export { renderWeatherView };
