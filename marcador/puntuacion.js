
// EQUIPOS
const gol1 = document.getElementById('gol1');
const btnGol1 = document.getElementById('btnGol1');
const gol2 = document.getElementById('gol2');
const btnGol2 = document.getElementById('btnGol2');

btnGol1.addEventListener('click',()=>{
    gol1.textContent = parseInt(gol1.textContent) + 1;
})
btnGol2.addEventListener('click',()=>{
    gol2.textContent = parseInt(gol2.textContent) + 1;
})


// TIEMPO

const menos = document.getElementById('menos');
const mas = document.getElementById('mas');
const tiempo = document.getElementById('tiempo');


mas.addEventListener('click',()=>{
    if(tiempo.textContent == "Primer Tiempo"){
        tiempo.textContent = "Segundo Tiempo";
    }else if(tiempo.textContent == "Segundo Tiempo"){
        tiempo.textContent = "T.Extra: Primer Tiempo";
    }else if(tiempo.textContent == "T.Extra: Primer Tiempo"){
        tiempo.textContent = "T.Extra: Segundo Tiempo";
    }
})

menos.addEventListener('click',()=>{
    if(tiempo.textContent == "T.Extra: Segundo Tiempo"){
        tiempo.textContent = "T.Extra: Primer Tiempo";
    }else if(tiempo.textContent == "T.Extra: Primer Tiempo"){
        tiempo.textContent = "Segundo Tiempo";
    }else if(tiempo.textContent == "Segundo Tiempo"){
        tiempo.textContent = "Primer Tiempo";
    }
})


//MODAL

const modal = document.querySelector('.modal');
const btnModal = document.querySelector('.btnModal');

document.addEventListener('DOMContentLoaded',()=>{
    modal.style.display = "flex";
})

btnModal.addEventListener('click',()=>{
    modal.style.display = "none"
})