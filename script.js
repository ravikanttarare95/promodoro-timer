const min = document.getElementById("min");
const sec = document.getElementById("sec");

const promodoroBox = document.querySelector(".promodoro-box");
const shortRestBox = document.querySelector(".short-rest-box");
const longRestBox = document.querySelector(".long-rest-box");

const timeContainer = document.querySelector(".timer-container");
const startButton = document.querySelector(".btn-start");
const stopButton = document.querySelector(".btn-stop");
const resetButton = document.querySelector(".btn-reset");

promodoroBox.addEventListener("click", () => {
  promodoroBox.classList.add("active-container");
  shortRestBox.classList.remove("active-container");
  longRestBox.classList.remove("active-container");
  min.innerText = "25";
  sec.innerText = "00";
});

shortRestBox.addEventListener("click", () => {
  shortRestBox.classList.add("active-container");
  longRestBox.classList.remove("active-container");
  promodoroBox.classList.remove("active-container");
  clearInterval(countDown);
  min.innerText = "05";
  sec.innerText = "00";
});

longRestBox.addEventListener("click", () => {
  longRestBox.classList.add("active-container");
  shortRestBox.classList.remove("active-container");
  promodoroBox.classList.remove("active-container");
  clearInterval(countDown);
  min.innerText = "15";
  sec.innerText = "00";
});

resetButton.addEventListener("click", () => {
  clearInterval(countDown);
  min.innerText = "00";
  sec.innerText = "00";
});

let countDown;

startButton.addEventListener("click", () => {
  if (
    min.innerText == "00" ||
    (min.innerText == "0" && sec.innerText == "00") ||
    sec.innerText == "0"
  ) {
    return;
  } else {
    let totalSeconds = parseInt(min.innerText) * 60 + parseInt(sec.innerText);

    countDown = setInterval(() => {
      totalSeconds -= 1;
      min.innerText = `${Math.floor(totalSeconds / 60)}`;
      sec.innerText = `${totalSeconds % 60}`;

      if (totalSeconds === 0) {
        clearInterval(countDown);
        alert("Time UP");
      }
    }, 1000);
  }
});

stopButton.addEventListener("click", () => {});
