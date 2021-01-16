let start = null;

function getTime() {
    end = Date.now();
    ellapsed = Math.floor((end - start) / 1000) + previous;
    
    if(ellapsed % 60 === 0){
        ++min;
        sec = 0;

        if(min % 60 == 0 && min != 0){
            ++hours;
            min = 0;
        }
    }else{
        ++sec;
    }
    
    hourSpan.textContent = (hours.toString().length < 2) ? `0${hours}`: hours;
    minSpan.textContent = (min.toString().length < 2) ? `0${min}`: min;
    secSpan.textContent = (sec.toString().length < 2) ? `0${sec}`: sec;
}

function startTimer() {
    isPaused = !isPaused;
    if(!isPaused){
        start = Date.now();
        intervalID = setInterval(() => { getTime() }, 1000);
    }else{
        clearInterval(intervalID);
        previous = ellapsed;
    }

    switchMode();
    
}

function clearTimer() {
    start = null;
    clearInterval(intervalID);
    ellapsed = 0;
    previous = 0;
    isPaused = true;

    hours = 0;
    sec = 0;
    min = 0;

    minSpan.textContent = "00";
    hourSpan.textContent = "00";
    secSpan.textContent = "00";

    switchMode();
}

// Switch button to pause or start
function switchMode(){
    if(!isPaused){
        startBtn.classList.remove('start')
        startBtn.classList.add('pause');
    }else{
        startBtn.classList.remove('pause');
        startBtn.classList.add('start')
    }

    startBtn.textContent = (isPaused) ? 'start' : 'pause';
}

let intervalID = null;
let ellapsed = 0;
let previous = 0;
let end = null;
let isPaused = true;
let hours = 0;
let min = 0;
let sec = 0;

const hourSpan = document.querySelector('.hour');
const minSpan = document.querySelector('.min');
const secSpan = document.querySelector('.sec');

const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', startTimer);
const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', clearTimer);
const date = document.querySelector('.current-time');