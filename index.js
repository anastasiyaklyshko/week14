let showMessage = () => {
let name = prompt ('Как тебя зовут?');
console.log (`Привет, ${name}!`);
};
showMessage ()

//вопрос 8 - Как сделать переход на другую 
//страницу при клике на кнопку (без <a href=...>, 
//только средствами JavaScript)?
//function link1 () {
//return (window.location.href = "http://www.google.com");
//}
//console.log (link1);

function link2 () {
alert (location.href); 
if (confirm("Перейти на Wikipedia?")) {
location.href = "https://wikipedia.org"; 
};
}
//вопрос 3 - Разные способы вызова функции: 
//1 способ - function declaration

function minus (a, b) {
    return a-b;
}
var result = minus (5,7);
console.log (result);

// 2 способ - function expression
let plus = function (c, d) {
    return c+d;
};
let result1 = plus (5,7);
console.log (result1);

// 3 способ - стрелочная функция
let sum = (e, f) => e+f;
let result3 = sum (3,6);
console.log (result3);

//Вопросы - вопрос 7.1.- Найти таблицу с id="age-table"
let table = document.getElementById ('age-table');
table.style.background = 'orange';
console.log (table);

//Вопросы - вопрос 7.2.- Найти Все элементы label внутри этой таблицы (их три)
let labels = table.getElementsByTagName ('label');
console.log (labels);

//Вопросы - вопрос 7.3.- Найти Форму form с именем name="search"

let form = document.getElementsByTagName('form');
console.log (form);
let search = document.getElementsByName('search');
console.log (search);

//Практическое задание - вопрос 2
function select(sender) {
sender.classList.add ("newcolors");
}
//Практическое задание - вопрос 3
function changeMe () {    
    let picture1 = document.getElementById ('picture1');
    picture1.src = "assest/Rectangle9.png";
   }