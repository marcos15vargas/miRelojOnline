// MODAL
const modal = document.querySelector('.modal');
const btnModal = document.querySelector('.btnModal');

document.addEventListener('DOMContentLoaded',()=>{
    modal.style.display = "flex";
})

btnModal.addEventListener('click',()=>{
    modal.style.display = "none"
})

// EQUIPOS

const local = document.querySelector('.local');
const visitante = document.querySelector('.visitante');
const btnLocal = document.getElementById('btnLocal');
const btnVisitante = document.getElementById('btnVisitante');

btnLocal.addEventListener('click',()=>{
    local.textContent = parseInt(local.textContent) + 1;
})
btnVisitante.addEventListener('click',()=>{
    visitante.textContent = parseInt(visitante.textContent) + 1;
})


// FALTAS Y PERIODO

const faltasLocal = document.querySelector('.faltasLocal');
const faltasVisitante = document.querySelector('.faltasVisitante');
const btnFaltasLocal = document.querySelector('.btnFaltasLocal');
const btnFaltasVisitante = document.querySelector('.btnFaltasVisitante');

const btnReiniciarLocal = document.querySelector('.btnReiniciarLocal');
const btnReiniciarPeriodo = document.querySelector('.btnReiniciarPeriodo');
const btnReiniciarVisitante = document.querySelector('.btnReiniciarVisitante');

const periodo = document.querySelector('.periodo');
const btnPeriodo = document.querySelector('.btnPeriodo');

btnFaltasLocal.addEventListener('click',()=>{
    if (parseInt(faltasLocal.textContent) < 5) {
        faltasLocal.textContent = parseInt(faltasLocal.textContent) + 1;
    }else{
        faltasLocal.style.color = "#ffff00";
    }
})
btnReiniciarLocal.addEventListener('click',()=>{
    faltasLocal.style.color = "#c1c1c1";
    faltasLocal.textContent = 0;
})
btnReiniciarPeriodo.addEventListener('click',()=>{
    periodo.textContent = 0;
})
btnReiniciarVisitante.addEventListener('click',()=>{
    faltasVisitante.style.color = "#c1c1c1";
    faltasVisitante.textContent = 0;
})

btnFaltasVisitante.addEventListener('click',()=>{
    if (parseInt(faltasVisitante.textContent) < 5) {
        faltasVisitante.textContent = parseInt(faltasVisitante.textContent) + 1;
    }else{
        faltasVisitante.style.color = "#ffff00";
    }
})

btnPeriodo.addEventListener('click',()=>{
    periodo.textContent = parseInt(periodo.textContent) + 1;
})
