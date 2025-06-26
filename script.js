const min = document.getElementById("min");
const sec = document.getElementById("sec");

const pomodoroBox = document.querySelector(".pomodoro-box");
const shortRestBox = document.querySelector(".short-rest-box");
const longRestBox = document.querySelector(".long-rest-box");

const timeContainer = document.querySelector(".timer-container");
const startButton = document.querySelector(".btn-start");
const stopButton = document.querySelector(".btn-stop");
const resetButton = document.querySelector(".btn-reset");

let type;
pomodoroBox.addEventListener("click", () => {
  choosePomodoro();
});

shortRestBox.addEventListener("click", () => {
  chooseShortRest();
});

longRestBox.addEventListener("click", () => {
  chooseLongRest();
});

function choosePomodoro() {
  pomodoroBox.classList.add("active-container");
  shortRestBox.classList.remove("active-container");
  longRestBox.classList.remove("active-container");
  min.innerText = "25";
  sec.innerText = "00";
  type = "pomo";
}

function chooseShortRest() {
  shortRestBox.classList.add("active-container");
  longRestBox.classList.remove("active-container");
  pomodoroBox.classList.remove("active-container");
  clearInterval(countDown);
  min.innerText = "05";
  sec.innerText = "00";
  type = "short";
}

function chooseLongRest() {
  longRestBox.classList.add("active-container");
  shortRestBox.classList.remove("active-container");
  pomodoroBox.classList.remove("active-container");
  clearInterval(countDown);
  min.innerText = "15";
  sec.innerText = "00";
  type = "long";
}

resetButton.addEventListener("click", function sd() {
  clearInterval(countDown);
  reset();
});

function reset() {
  switch (type) {
    case "pomo":
      min.innerText = "25";
      sec.innerText = "00";
      break;
    case "short":
      min.innerText = "05";
      sec.innerText = "00";
      break;
    case "long":
      min.innerText = "15";
      sec.innerText = "00";
      break;
  }
}

let countDown;
const overlay = document.querySelector(".overlay");
const startAlertBox = document.querySelector(".start-alert-box");
const timeAlertBox = document.querySelector(".time-alert-box");
startButton.addEventListener("click", () => {
  if (
    min.innerText == "00" ||
    (min.innerText == "0" && sec.innerText == "00") ||
    sec.innerText == "0"
  ) {
    overlay.style.display = "flex";
    startAlertBox.style.display = "flex";
  } else {
    let totalSeconds = parseInt(min.innerText) * 60 + parseInt(sec.innerText);

    countDown = setInterval(() => {
      totalSeconds -= 1;
      min.innerText = `${Math.floor(totalSeconds / 60)}`;
      sec.innerText = `${totalSeconds % 60}`;

      if (totalSeconds === 0) {
        clearInterval(countDown);
        overlay.style.display = "flex";
        timeAlertBox.style.display = "flex";
        reset();
      }
    }, 1000);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(countDown);
});

document.getElementById("pomo-alert").addEventListener("click", () => {
  choosePomodoro();
  overlay.style.display = "none";
  startAlertBox.style.display = "none";
});
document.getElementById("short-alert").addEventListener("click", () => {
  chooseShortRest();
  overlay.style.display = "none";
  startAlertBox.style.display = "none";
});
document.getElementById("long-alert").addEventListener("click", () => {
  chooseLongRest();
  overlay.style.display = "none";
  startAlertBox.style.display = "none";
});

document.getElementById("cross-icon").addEventListener("click", () => {
  overlay.style.display = "none";
  startAlertBox.style.display = "none";
});

document.getElementById("btn-ta-close").addEventListener("click", () => {
  overlay.style.display = "none";
  startAlertBox.style.display = "none";
});
