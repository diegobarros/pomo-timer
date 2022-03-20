let duration = 1500;
let isPlaying = false;

const INITIAL_TIME_IN_SECS = 1500;
const timerScreen = document.querySelector('#timer');
let timer = null;


window.addEventListener('load', () => {

    document.querySelector('.button').addEventListener('click', () => {

        if (isPlaying) {

            isPlaying = false;
            clearInterval(timer);

        } else {

            isPlaying = true;
            timer = setInterval(start, 1000);
        }

    });

});


let formatTime = (duration) => {

    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;

    return `${minutes}:${seconds}`;

}

let reset = () => {
    let duration = INITIAL_TIME_IN_SEC;
    timerScreen.textContent = formatTime(duration);
}

let start = () => {

    if (isPlaying && duration > 0) {

        duration--;
        timerScreen.textContent = formatTime(duration);
        // ⏸
        
    } else {

        timerScreen.textContent = formatTime(duration); 
    }
}