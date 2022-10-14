const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients');
const li = document.createElement('li');
li.classList.add('item');
li.textContent = 'Potatoes';
list.append(li);
const allLi = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");
console.log(allLi);
list.innerHTML = allLi;
console.log(list);