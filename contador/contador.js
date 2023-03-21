const btnMenosUno = document.querySelector('.menosUno');
const btnMenosDos = document.querySelector('.menosDos');
const btnMenosCinco = document.querySelector('.menosCinco');
const btnMenosDiez = document.querySelector('.menosDiez');
const btnMasUno = document.querySelector('.masUno');
const btnMasDos = document.querySelector('.masDos');
const btnMasCinco = document.querySelector('.masCinco');
const btnMasDiez = document.querySelector('.masDiez');
const display = document.querySelector('.num');
const reiniciar = document.getElementById('rein');


btnMasUno.addEventListener('click',()=>{
    display.textContent = parseInt(display.textContent)+1;
})
btnMasDos.addEventListener('click',()=>{
    display.textContent = parseInt(display.textContent)+2;
})
btnMasCinco.addEventListener('click',()=>{
    display.textContent = parseInt(display.textContent)+5;
})
btnMasDiez.addEventListener('click',()=>{
    display.textContent = parseInt(display.textContent)+10;
})


btnMenosUno.addEventListener('click',()=>{
    display.textContent = parseInt(display.textContent)-1;
})
btnMenosDos.addEventListener('click',()=>{
    display.textContent = parseInt(display.textContent)-2;
})
btnMenosCinco.addEventListener('click',()=>{
    display.textContent = parseInt(display.textContent)-5;
})
btnMenosDiez.addEventListener('click',()=>{
    display.textContent = parseInt(display.textContent)-10;
})

reiniciar.addEventListener('click',()=>{
    display.textContent = '0';
})