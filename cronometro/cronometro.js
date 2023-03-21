let hr = min = sec = ms = "0" + 0, starTimer;

const startBtn = document.querySelector('.iniciar');
const stopBtn = document.querySelector('.parar');
const restartBtn = document.querySelector('.reiniciar');

startBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
restartBtn.addEventListener('click',reset);


function start(){
    startBtn.style.display = 'none';
    stopBtn.classList.remove('active');

    starTimer = setInterval(()=>{
        ms++;
        ms = ms < 10 ? '0' + ms : ms;
        
        if(ms == 100){
            sec++;
            sec = sec < 10 ? '0' + sec : sec;
            ms = '0' + 0;
        }
        if(sec == 60){
            min++;
            min = min < 10 ? '0' + min : min;
            sec = '0' + 0;
        }
        if(min == 60){
            hr++;
            hr = hr < 10 ? '0' + hr : hr;
            min = '0' + 0;
        }
        putValue();
    },10);
}

function stop(){
    startBtn.style.display = 'inline';
    stopBtn.classList.remove('active');
    clearInterval(starTimer);
    console.log(letra);
}

function reset(){
    startBtn.style.display = 'inline';
    stopBtn.classList.remove('active');
    clearInterval(starTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
}
function putValue(){
    document.querySelector('.milisecond').innerHTML = ms;
    document.querySelector('.second').innerHTML = sec;
    document.querySelector('.minute').innerHTML = min;
    document.querySelector('.hour').innerHTML = hr;
}