const promodoroBox = document.querySelector(".promodoro-box");
const shortRestBox = document.querySelector(".short-rest-box");
const longRestBox = document.querySelector(".long-rest-box");

const timeContainer = document.querySelector(".timer-container");

promodoroBox.addEventListener("click", () => {
  promodoroBox.classList.add("active-container");
  shortRestBox.classList.remove("active-container");
  longRestBox.classList.remove("active-container");
});

shortRestBox.addEventListener("click", () => {
  shortRestBox.classList.add("active-container");
  longRestBox.classList.remove("active-container");
  promodoroBox.classList.remove("active-container");
});

longRestBox.addEventListener("click", () => {
  longRestBox.classList.add("active-container");
  shortRestBox.classList.remove("active-container");
  promodoroBox.classList.remove("active-container");
});
