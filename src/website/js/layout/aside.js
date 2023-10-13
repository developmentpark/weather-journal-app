const aside = document.querySelector(".aside-container");
const asideOpener = document.querySelector("#aside-opener");
asideOpener.addEventListener("click", () => {
  aside.classList.remove("aside-container_hidden");
});

const asideCloser = document.querySelector("#aside-closer");
asideCloser.addEventListener("click", () => {
  aside.classList.add("aside-container_hidden");
});

const asideOverlay = document.querySelector("#aside-overlay");
asideOverlay.addEventListener("click", () => {
  aside.classList.add("aside-container_hidden");
});
