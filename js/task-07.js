const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
// console.dir(inputRef);
inputRef.addEventListener('input', onInput);
function onInput(event) {
    spanRef.style.fontSize = `${inputRef.value}px`;
}


