// const body = document.body;
// console.log(body);
const TAGS_HEADER = "h1h2h3h4h5h6";
// let myURL = document.querySelector('#categories');
let startCategory = document.getElementById('categories');
const listCategory = startCategory.querySelectorAll('ul#categories > li');
const numberCategories = listCategory.length;

//console.log(myURL);
console.log(`Number of categories: ${numberCategories}`);

for(let category of listCategory) 
{
    console.log( `Category: ${category.querySelector('h2').textContent}\nElements: ${category.querySelectorAll('ul > li').length}` );
};

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5