const searchBox = document.querySelector(".search-box-container");
const searchOpener = document.querySelector("#search-box-opener");
searchOpener.addEventListener("click", () => {
  console.log("open search");
  searchBox.classList.remove("search-box-container_hidden");
});

const searchOverlay = document.querySelector("#search-box-overlay");
searchOverlay.addEventListener("click", () => {
  searchBox.classList.add("search-box-container_hidden");
});

const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", () => {
  searchBox.classList.add("search-box-container_hidden");
});
