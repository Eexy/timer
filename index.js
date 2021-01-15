let start = null;

function getTime() {
    end = Date.now();
    ellapsed = Math.floor((end - start) / 1000) + previous;
    date.textContent = ellapsed;
}

function startTimer() {
    start = Date.now();
    intervalID = setInterval(() => { getTime() }, 1000);
}

function clearTimer() {
    start = null;
    clearInterval(intervalID);
    ellapsed = 0;
    date.textContent = 0;
    previous = 0;
}

function pauseTimer() {
    clearInterval(intervalID);
    previous = ellapsed;
    pause = true;
}

let intervalID = null;
let ellapsed = 0;
let previous = 0;
let end = null;
const startBtn = document.querySelector('.start');
startBtn.addEventListener('click', startTimer);
const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', clearTimer);
const pauseBtn = document.querySelector('.pause');
pauseBtn.addEventListener('click', pauseTimer);
const date = document.querySelector('.date');