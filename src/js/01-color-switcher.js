const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const background = document.querySelector('body');

let colorTimer = null;

let randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnStart.addEventListener('click', () => {
  colorTimer = setInterval(() => {
    background.style.backgroundColor = randomColor();
  }, 1000);

  btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
  clearInterval(colorTimer);
  btnStart.disabled = false;
});
