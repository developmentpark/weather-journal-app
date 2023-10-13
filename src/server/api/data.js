const projectData = [
  {
    city: "Springfield",
    date: 1693955738661,
    temp: 23,
    humidity: 63,
    windSpeed: 6,
    feeling: "It's a wonderful day to savor the nice weather!",
    description: "broken clouds",
    icon: "https://openweathermap.org/img/wn/04d@2x.png",
  },
];

export default {
  add: function (item) {
    projectData.push(item);
  },
  getAll: function () {
    return [...projectData];
  },
};
