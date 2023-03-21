// MODAL

const modal = document.querySelector('.modal');
const btnModal = document.querySelector('.btnModal');

document.addEventListener('DOMContentLoaded',()=>{
    modal.style.display = "flex";
})

btnModal.addEventListener('click',()=>{
    modal.style.display = "none"
})


// PUNTOS

const puntosLocal = document.querySelector('.puntosLocal');
const puntosVisitante = document.querySelector('.puntosVisitante');
const btnPuntosLocal = document.querySelector('.btnPuntosLocal');
const btnPuntosVisitante = document.querySelector('.btnPuntosVisitante');

const setLocal = document.querySelector('.setLocal');
const setVisitante = document.querySelector('.setVisitante');

const juegoLocal = document.querySelector('.juegoLocal');
const juegoVisitante = document.querySelector('.juegoVisitante');

const saqueLocal = document.getElementById('saqueLocal');
const claseSaqueLocal = saqueLocal.classList;
const saqueVisitante = document.getElementById('saqueVisitante'); 
const claseSaqueVisitante = saqueVisitante.classList;


btnPuntosLocal.addEventListener('click',()=>{
    if(parseInt(setLocal.textContent) >= 5 && diferencia(setLocal.textContent,setVisitante.textContent) >=2){
        juegoLocal.textContent = parseInt(juegoLocal.textContent) + 1;
        setLocal.textContent = "0";
        setVisitante.textContent = "0";
    }else{
        if(parseInt(puntosLocal.textContent)>= 45 && diferencia(puntosLocal.textContent,puntosVisitante.textContent) >= 30){
            setLocal.textContent = parseInt(setLocal.textContent) + 1;
            puntosLocal.textContent = "0";
            puntosVisitante.textContent = "0";
            claseSaqueLocal.toggle('noActive');
            claseSaqueVisitante.toggle('noActive');
        }else{
            puntosLocal.textContent = parseInt(puntosLocal.textContent) + 15;
        }
    }
})
btnPuntosVisitante.addEventListener('click',()=>{
    if(parseInt(setVisitante.textContent)>=5 && diferencia(setVisitante.textContent,setLocal.textContent)>=2){
        juegoVisitante.textContent = parseInt(juegoVisitante.textContent) + 1;
        setLocal.textContent = "0";
        setVisitante.textContent = "0";
    }else{
        if(parseInt(puntosVisitante.textContent)>= 45 && diferencia(puntosVisitante.textContent,puntosLocal.textContent) >= 30){
            setVisitante.textContent = parseInt(setVisitante.textContent) + 1;
            puntosVisitante.textContent = "0";
            puntosLocal.textContent = "0";
            claseSaqueLocal.toggle('noActive');
            claseSaqueVisitante.toggle('noActive');
        }else{
            puntosVisitante.textContent = parseInt(puntosVisitante.textContent) + 15;
        }
    }
})


// BOTONES

const btnReiPunLoc = document.querySelector('.btnReiPunLoc');
const btnReiPunVis = document.querySelector('.btnReiPunVis');
const btnReiSetLoc = document.querySelector('.btnReiSetLoc');
const btnReiSetVis = document.querySelector('.btnReiSetVis');
const btnReiJueLoc = document.querySelector('.btnReiJueLoc');
const btnReiJueVis = document.querySelector('.btnReiJueVis');


btnReiPunLoc.addEventListener('click',()=>{
    puntosLocal.textContent = "-15";
})
btnReiPunVis.addEventListener('click',()=>{
    puntosVisitante.textContent = "-15";
})
btnReiSetLoc.addEventListener('click',()=>{
    setLocal.textContent = "0";
})
btnReiSetVis.addEventListener('click',()=>{
    setVisitante.textContent = "0";
})
btnReiJueLoc.addEventListener('click',()=>{
    juegoLocal.textContent = "0";
})
btnReiJueVis.addEventListener('click',()=>{
    juegoVisitante.textContent = "0";
})

function diferencia(n1,n2){
    console.log(n1,n2)
    return parseInt(n1) - parseInt(n2);
}