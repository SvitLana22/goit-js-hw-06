
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');
let counter = 0;
decBtn.addEventListener('click', counterDecrement);
function counterDecrement(){
    counter -= 1;
    counterValue.textContent = counter;
}
incBtn.addEventListener('click', counterIncrement);
function counterIncrement() {
    counter += 1;
    counterValue.textContent = counter;
}
console.log(counterDecrement);
console.log(counterIncrement);