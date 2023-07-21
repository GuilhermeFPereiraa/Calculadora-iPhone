let input = document.querySelector('input');
let keys = document.getElementsByName('keyBtn');
let enter = document.querySelector('#enter');
let C = document.querySelector('#C');
input.focus();

let keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '%', '/', '*', '-', '+'];

input.addEventListener('keydown', function (ev) {
  ev.preventDefault();
  if (keysAllowed.includes(ev.key)) {
    input.value += ev.key;
  }
  if(ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1);
  }
  if(ev.key === 'Enter') {
    calcular();
  }
})

function calcular() {
  input.value = eval(input.value);
}

enter.addEventListener('click', function () {
  calcular()
})

keys.forEach(function(ev) {
  ev.addEventListener('click', function () {
    input.value += ev.dataset.keys;
    C.innerHTML = 'C';
  })
})

C.addEventListener('click', function () {
  input.value = '';
  input.focus();
  C.innerHTML = 'AC';
})

document.querySelector('#np').addEventListener('click',
function () {
  let np = parseFloat(input.value);
  if ( np >= 0 ) {
    input.value = `-${np}`
  } else {
    input.value = `${np - np - np}`
  }
})

document.querySelector('#Dividido100').addEventListener('click', function () {
  let div100 = parseFloat(input.value);
  input.value = div100/100;
})