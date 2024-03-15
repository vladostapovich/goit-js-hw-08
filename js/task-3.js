const inputEl = document.querySelector("#name-input");
const outPut = document.querySelector("#name-output");
inputEl.addEventListener("input", (e) => {
  outPut.innerHTML = e.currentTarget.value;
  if (inputEl.value.trim().length === 0) {
    outPut.textContent = "Anonymous";
  }
});
