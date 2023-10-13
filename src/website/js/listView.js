import { getEl } from "../utils/dom.js";
import icons from "../svg/icons.svg";
import date from "../utils/date.js";

function itemView(item) {
  return `
    <li class="post">
    <div class="post__icon-container">
      <img
        class="post__icon"
        src=${item.icon}
      />
    </div>
    <div class="post__content">
      <div class="post__header">
        <div class="city-date-container">
          <div class="city-container">
            <svg class="icon icon_primary">
              <use xlink:href=${icons}#location></use>
            </svg>
            <span class="city">${item.city}</span>
          </div>
          <div class="date-container">
            <svg class="icon icon_secondary icon_mini">
              <use xlink:href=${icons}#clock></use>
            </svg>
            <span class="date">${date.format(item.date)}</span>
          </div>
        </div>
        <div class="temp-container">
          <div class="temp-value">${item.temp}</div>
          <div class="temp-unit">°C</div>
        </div>
      </div>
      <p class="post__feeling">${item.feeling}</p>
    </div>
  </li>
    `;
}

function renderListView(list = []) {
  getEl("posts-list").innerHTML = list.map((item) => itemView(item)).join("");
}

export { renderListView };
