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

// Создание HTML элемента
document.createElement('div');
let span = document.createElement('span');

// Добавление HTML элемента на страницу
document.body.appendChild(span);

// Удаление HTML элемента со страницы
span.remove();

// Изменение текста внутри элемента - Свойство innerText
document.getElementById('products-title').innerText = 'Choose your destiny';

// Изменение HTML элемента - Свойство innerText
document.getElementById('products-title').innerHTML = 'Выберите <span>пиццу<span/>';

// Значение (value) элемента - Свойство value
document.getElementsByName('address')[0].value;

// Работа с атрибутами элемента
element.setAttribute(name, value);
element.getAttribute(name);
element.removeAttribute(name);
address.setArribute('disabled', 'disabled');

// Другой вариант
element.checked
element.disabled
element.id

// Изменение класса элемента
// Свойство className - все классы в одной строке
// Свойство classList - все классы в массиве
element.classList.add('newClass');
element.classList.remove('newClass');
address.classlist.add('qe');

// Изменение стилей у элемента HTML
element.style.textAlign = 'center';
// Свойства с дефисом становятся camelCase
text-align = textAlign
font-size = fontSize

// Получение стилей HTML элемента
var styles = getComputedStyle(element);

// Доступ к соседним элементам
Свойство parentElement - родительский элемент
Свойство children - дочерние элементы
Свойство nextElementSibling - следующий соседний элемент
Свойство previousElementSibling - предыдущий элемент








