const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.getAttribute('data-length');
inputRef.addEventListener('blur', onInput);
function onInput(event) {
    const isValid = event.target.value.length === Number(inputLength);
    if (isValid) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    }
    else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
        
    }
}
console.log(onInput);