
let duration = 1500;
let timer = null;
let isPlaying = false;

const POMODORO_INTERVALS = {
    session: { short: 1500, long: 2000 },
    pause: { short: 300, long: 1200 }
}

const message = document.querySelector('#message');
const pomodoroTimer = document.querySelector('#timer');
const playButton = document.querySelector('.button');

const PLAY_SYMBOL = "▶";
const PAUSE_SYMBOL = "| |";
const PLAY_MESSAGE = "EXECUTANDO";
const PAUSE_MESSAGE = "PARADO";


window.addEventListener('load', () => {

    playButton.addEventListener('click', play);

    pomodoroTimer.textContent = formatTime(duration);
    duration = POMODORO_INTERVALS.session.short;

});


function play() {

    if (isPlaying) {
        
        isPlaying = false;
        clearInterval(timer);

        message.textContent = PAUSE_MESSAGE;
        playButton.textContent = PLAY_SYMBOL;

    } else {
 
        isPlaying = true;
        timer = setInterval(update, 1000);

        message.textContent = PLAY_MESSAGE;
        playButton.textContent = PAUSE_SYMBOL;     
    }

}

function update() {

    if (isPlaying && duration > 0) {

        duration--;
        pomodoroTimer.textContent = formatTime(duration);

    }
}

function formatTime(duration) {

    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

}