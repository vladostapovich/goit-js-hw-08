const control = document.querySelector("#controls");
const input = control.querySelector('[type="number"]');

const btnS = control.querySelectorAll('[type="button"]');
const divBoxes = document.querySelector("#boxes");
const createBtn = btnS[0];
const destroyBtn = btnS[1];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const aspect = 30;
  destroyBoxes();
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${aspect + i * 10}px`;
    div.style.height = `${aspect + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(div);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  if (input.value > 0 && input.value < 100) {
    createBoxes(input.value);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
