const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients');
const allLi = ingredients.map((ingredient) => {
  const liRef = document.createElement('li');
liRef.classList.add('item');
liRef.textContent = ingredient;
  return liRef
});
list.append(...allLi);
