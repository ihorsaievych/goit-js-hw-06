const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.getElementById('ingredients');
let fragment = new DocumentFragment();
for (const ingredient of ingredients) {
  let li = document.createElement('li');
  li.classList.add('item');
  li.append(ingredient);
  fragment.append(li);
}
listIngredients.append(fragment);

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.