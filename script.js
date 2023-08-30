// Поиск элемента по идентификатору
const productsTitle = document.getElementById('products-title');
console.log(productsTitle);

// Поиск элементов по классу
const product = document.getElementsByClassName('product');
console.log(product);

// Доступ по индексу элемента
const productOne = document.getElementsByClassName('product')[5];
console.log(productOne);

// Поиск элементов по тегу

// Поиск элементов по атрибуту name
const address = document.getElementsByTagName('address');
console.log(address);

// Поиск элементов по запросу
console.log(document.querySelector('#products-title'));
console.log(document.querySelector('.product:nth-child(4) .product-title'));
console.log(document.querySelectorAll('div')); // можно использовать forEach