
$(document).ready(function () {
  $('.menu-btn').click(function () {
    // list.classList.add('show');
    $('.nav-list').slideToggle(500);
  });
});


let input = document.querySelector('#input')
let fontSize = 35
// Tamaño inicial
input.style.fontSize = `${fontSize}px` 

input.addEventListener('input', () => {
  let l = input.value.length
  let s = (l/5) | 0 // Disminuimos 1px cada 5 caracteres
  input.style.fontSize = `${(fontSize - s) || 1}px`
})


let input2 = document.querySelector('#input2')
let fontSize2 = 35
// Tamaño inicial
input2.style.fontSize = `${fontSize2}px` 

input2.addEventListener('input', () => {
  let l2 = input2.value.length
  let s2 = (l/5) | 0 // Disminuimos 1px cada 5 caracteres
  input2.style.fontSize = `${(fontSize2 - s2) || 1}px`
})