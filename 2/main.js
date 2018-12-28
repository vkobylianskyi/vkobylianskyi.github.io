
'use strict'

// Task 1

// let numeral;
// while(true) {
//     numeral = Number(prompt('Введите число', '0'));

//     if(!Number.isNaN(numeral)) {
//         break;
//     }

//     alert('Ошибка! Введите валидное число!');
// }
// let message;
// if (numeral > 0) {
//     message = '1'
// }
// else if (numeral < 0) {
//     message = '-1'
// }
// else if(numeral === 0) {
//     message = '0'
// }
// alert(message);

// Task 2

// let question = prompt('Каково «официальное» название JavaScript?');
// if (question == 'ECMAScript') {
//     alert('Верно!')
// } else {
//     alert('Не знаете? «ECMAScript»!')
// }

// Task 3

// let login = prompt('Кто пришел');
// if (login =='Админ') {
//     let parol = prompt("Пароль") 
//         if (parol == 'Чёрный Властелин') {
//             alert('Добро пажаловать')
//         } else if (parol == null) {
//             alert ('Вход отменен')
//         } else {
//             alert ('Пароль неверен')
//         }
// } else if (login === null) { 
//     alert("Вход отменен")
// }
// else {
//     alert('я Вас не знаю')
// };

// Task 4
// let a = prompt("Введите число a");
// let b = prompt("Введите число b");
// let = result == (a + b < 4) ?
//     'Мало':
// 'Много';
//   alert(result);

let login = prompt('Веедите логин')
  var message;
  (login == 'Вася') ?
  message = 'Привет' :
  (login == 'Директор') ?
  message = 'Здравствуйте' :
  (login == null) ?
  message = 'Нет логина' :
  message = '';
  alert (message)
