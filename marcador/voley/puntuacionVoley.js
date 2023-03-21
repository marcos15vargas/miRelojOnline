// PUNTOS

const btnLocal = document.getElementById('btnLocal');
const puntosLocal = document.querySelector('.puntosLocal');
const btnVisitante = document.getElementById('btnVisitante');
const puntosVisitante = document.querySelector('.puntosVisitante');

const setLocal = document.querySelector('.setLocal');
const setVisitante = document.querySelector('.setVisitante');

btnLocal.addEventListener('click',()=>{
    if(parseInt(puntosLocal.textContent) >=25 && diferencia(puntosLocal.textContent,puntosVisitante.textContent) >=2){
        setLocal.textContent = parseInt(setLocal.textContent) + 1;
        puntosLocal.textContent = "0";
        puntosVisitante.textContent = "0"
    }else{
        puntosLocal.textContent = parseInt(puntosLocal.textContent) + 1;
    }
})
btnVisitante.addEventListener('click',()=>{
    if(parseInt(puntosVisitante.textContent) >=25 && diferencia(puntosVisitante.textContent,puntosLocal.textContent) >=2){
        setVisitante.textContent = parseInt(setVisitante.textContent) + 1;
        puntosVisitante.textContent = "0";
        puntosLocal.textContent = "0";
    }else{
        puntosVisitante.textContent = parseInt(puntosVisitante.textContent) + 1;
    }
})


function diferencia(n1,n2){
    console.log(n1,n2)
    return parseInt(n1) - parseInt(n2);
}





// BOTONES

const btnReiPuntLoc = document.querySelector('.btnReiPuntLoc');
const btnReiSetLoc = document.querySelector('.btnReiSetLoc');
const btnReiSetVis = document.querySelector('.btnReiSetVis');
const btnReiPuntVis = document.querySelector('.btnReiPuntVis');

btnReiPuntLoc.addEventListener('click',()=>{
    puntosLocal.textContent = "-1";
})
btnReiSetLoc.addEventListener('click',()=>{
    setLocal.textContent = "0";
})
btnReiSetVis.addEventListener('click',()=>{
    setVisitante.textContent = "0";
})
btnReiPuntVis.addEventListener('click',()=>{
    puntosVisitante.textContent = "-1";
})



// MODAL

const modal = document.querySelector('.modal');
const btnModal = document.querySelector('.btnModal');

document.addEventListener('DOMContentLoaded',()=>{
    modal.style.display = "flex";
})

btnModal.addEventListener('click',()=>{
    modal.style.display = "none"
})