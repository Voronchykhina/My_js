// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, 
// имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - 
// строка "jqueryismyjam".

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
[emailInputName]: 'henry.carter@aptmail.com',
[passwordInputName]: 'jqueryismyjam',

  // Change code above this line
};


// console.log(credentials)


// 12. Напиши функцию countProps(object), которая считает и возвращает 
// количество собственных свойств объекта в параметре object. 
// Используй переменную propCount для хранения количества свойств 
// объекта.

// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, 
// score: 500 }) возвращает 3

// function countProps(object) {
//   let propCount = 0;

    // Change code below this line

  // for (let key in object) {
  //   let number = object.hasOwnProperty(key);
  //   propCount += number;
  // }

    // Change code above this line
//   return propCount;
// }
// console.log(countProps({})); //0
// console.log(countProps({ name: "Mango", age: 2 })); //2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3


// 14. Выполни рефакторинг функции countProps(object) 
// используя метод Object.keys() и, возможно, но необязательно, 
// цикл for...of.


// function countProps(object) {
  // Change code below this line
  // let propCount = 0;
  // let keys = Object.keys(object) 

  // for (const key in object) {
  //   propCount += 1;
  // }

  // return keys.length
  // return propCount;
  // Change code above this line
// }

// 12. Перебери массив объектов colors используя цикл for...of. 
// Добавь в массив hexColors значения свойств hex, 
// а в массив rgbColors значения свойств rgb из всех объектов 
// массива colors.




const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];



//12. const hexColors = [];
// const rgbColors = [];
// Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }

// 21. Пришел трёхдневный прогноз максимальных температур и 
// мы считаем среднюю температуру за три дня (meanTemperature). 
// Замени объявления переменных yesterday, today и tomorrow 
// одной операцией деструктуризации свойств объекта 
// highTemperatures.

// 22. В прогнозе максимальных температур также может быть 
// необязательное свойство icon - иконка погоды. 
// Замени объявления переменных yesterday, today, tomorrow и icon
// одной операцией деструктуризации свойств объекта 
// highTemperatures. Задай значение по умолчанию для 
// icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".


// 23. Замени объявления переменных highYesterday, highToday, 
// highTomorrow и highIcon одной операцией деструктуризации 
// свойств объекта highTemperatures. Задай значение по умолчанию 
// для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
const icon = highTemperatures.icon;

const {
  yesterday: highYesterday, 
  today: highToday, 
  tomorrow: highTomorrow, 
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

