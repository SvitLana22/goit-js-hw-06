const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output')
inputRef.addEventListener('input', handlerInput);
// function handlerInput(evt) {
//     console.dir(evt.currentTarget.value);
// }
// function handlerInput(event) {
//   spanRef.textContent =
//     event.currentTarget.value || (spanRef.textContent = "Anonymous");
// }
function handlerInput(event) {
   if (event.currentTarget.value !== "") {
     spanRef.textContent = event.currentTarget.value;
   } else {
     spanRef.textContent = "Anonymous";
}
}
console.log(handlerInput)