class Pomodoro {


    constructor() {

        this.segundos = 0;
        this.minutos = 25;
        this.play = false;

    }

    get minutos() { return this.minutos; }

    get segundos() { return this.segundos; }

    start() {

        this.play = true;

        setInterval(() => {

            this.segundos--;
        
        }, 1000);

    }

    stop() {
        this.segundos = 0;
        this.minutos = 25;
        this.play = false;
    }

    pause() {

    }


}

Pomodoro.toString = () => {

    

    return '${s}:$'

};

