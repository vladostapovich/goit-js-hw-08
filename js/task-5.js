function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanEl = document.querySelector(".color");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", (e) => {
  const colorValue = getRandomHexColor();
  document.body.style.backgroundColor = colorValue;
  spanEl.textContent = colorValue;
});
