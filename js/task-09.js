function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonRef = document.querySelector('.change-color')
const bodyRef = document.querySelector('body');
const textColorRef = document.querySelector('.color');

buttonRef.addEventListener('click', onButton);

function onButton() {
  const randomColor = getRandomHexColor();
  textColorRef.textContent = randomColor;
  bodyRef.style.backgroundColor = randomColor;

}
console.log(buttonRef);

