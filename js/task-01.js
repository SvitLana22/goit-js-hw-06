const totalСategories = document.querySelectorAll('.item');
console.log('Number of categories:', totalСategories.length);

const categoriesArray = [...totalСategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
