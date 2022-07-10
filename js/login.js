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

// 24. Выполни рефакторинг цикла for...of так, 
// чтобы в нём использовалась деструктуризация объекта.




const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

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

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Change code below this line

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

// const {
//   yesterday: highYesterday, 
//   today: highToday, 
//   tomorrow: highTomorrow, 
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;

// Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 25. Мы получили прогноз погоды на два дня, 
// с минимальными и максимальными температурами, 
// а также необязательными иконками. 
// Замени объявления всех переменных одной операцией 
// деструктуризации свойств объекта forecast. 
// Задай значение по умолчанию для иконок, переменных todayIcon 
// и tomorrowIcon - строку 
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".



const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const {
  today: {high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"},
  tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}
} = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// 26. Функция calculateMeanTemperature(forecast) принимает один 
// параметр forecast - объект температур на два дня следующего 
// формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }

// Change code below this line


// function calculateMeanTemperature(forecast) {
//   const {today: {low: todayLow, high: todayHigh}, 
//   tomorrow: {low: tomorrowLow, high: tomorrowHigh}
// } = forecast

  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// 27. В переменной scores хранится массив результатов 
// тестирования. Используя распыление и методы Math.max() 
// и Math.min() дополни код так, чтобы в переменной 
// bestScore был самый высокий балл, 
// а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores));


// 28. В переменных firstGroupScores, secondGroupScores и 
// thirdGroupScores хранятся результаты тестирования отдельных
//  групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от 
// первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.


const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line


const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = (Math.max(...allScores));
const worstScore = (Math.min(...allScores));

// 29. В конструкторе можно создавать новые тесты, для которых 
// есть настройки по умолчанию которые хранятся в переменной 
// defaultSettings. Во время создания теста, 
// все или часть настроек можно переопределить, 
// они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, 
// необходимо взять настройки по умолчанию 
// и поверх них применить переопределённые настройки. 
// Дополни код так, чтобы в переменной finalSettings
//  получился объект финальных настроек теста.

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings};



// 30. Напиши функцию makeTask(data) 
// которая принимает один параметр data - 
// объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, 
// не изменяя напрямую параметр data. 
// В новом объекте должно быть свойство completed, 
// значение которого хранится в одноимённой локальной 
// переменной.

// В параметре data гарантированно будет только свойство text,
//  а остальные два, category и priority, могут отсутствовать. 
// Тогда, в новом объекте задачи, в свойствах category и 
// priority должны быть значения по умолчанию, 
// хранящиеся в одноимённых локальных переменных.

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
return {
  ...{completed,
    category,
    priority},  ...data}
// Change code above this line
}

// 31. Используя операцию rest дополни код функции add() так, 
// чтобы она принимала любое количество аргументов, 
// считала и возвращала их сумму.


// Change code below this line
function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }

  return (total)
  // Change code above this line
}

// 32. Функция addOverNum() считает сумму всех аргументов. 
// Измени параметры и тело функции addOverNum() так, 
// чтобы она считала сумму только тех аргументов, 
// которые больше чем заданное число. 
// Это число должно быть первым параметром функции.

// Change code below this line
function addOverNum(firstArgs, ...args) {
  let total = 0;

  for (const arg of args) {
    if(arg > firstArgs){
      total += arg;
    }
  }
  return total;
  // Change code above this line
}

// 33. Функция findMatches() принимает произвольное количество
//  аргументов. Первым аргументом всегда будет массив чисел, 
// а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив 
// matches, в котором будут только те аргументы, начиная со 
// второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) 
// должна вернуть массив [1, 2], потому что только они есть 
// в массиве первого аргумента.


// Change code below this line
function findMatches(number, ...args) {
  const matches = []; // Don't change this line
  for (const arg of args) {
    if(number.includes(arg))
    matches.push(arg)
  }
  // Change code above this line
  return matches;
}

// 34. Добавь объекту bookShelf ещё два метода, 
// которые пока что будут возвращать просто строки по аналогии
//  с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. 
// Возвращает строку "Deleting book <имя книги>", 
// где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название
// книги на новое. 
// Возвращает строку "Updating book <старое имя> to <новое имя>",
// где <старое имя> и <новое имя>это значения параметров 
// oldName и newName соотвественно.


// const bookShelf = {
  // Change code below this line
  // books: ["The last kingdom", "The guardian of dreams"],
  // getBooks() {
  //   return "Returning all books";
  // },
  // addBook(bookName) {
  //   return `Adding book ${bookName}`;
  // },
  // removeBook(bookName) {
  //   return `Deleting book ${bookName}`;
  // },
  // updateBook(oldName, newName) {
  //   return `Updating book ${oldName} to ${newName}`;
  // },
  // Change code above this line
// };

// 35. Дополни метод updateBook(oldName, newName) так, 
// чтобы он изменял название книги с oldName на newName 
// в свойстве books. Используй indexOf() для того, 
// чтобы найти нужный элемент массива, 
// и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     let indexBook = this.books.indexOf(oldName);
//     this.books.splice(indexBook, 1, newName);
//     // Change code above this line
//   },
// };

// 36. К нам обратилась владелица лавки зелий «У старой жабы» 
// и заказала программу для ведения инвентаря - добавления, 
// удаления, поиска и обновления зелий. 
// Добавь объекту atTheOldToad свойство potions, 
// значением которого сделай пустой массив.

// 37. Добавь объекту atTheOldToad метод getPotions(), 
// который просто возвращает значение свойства potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions () {
//     return this.potions;
//   },
//   // Change code above this line
// };

// 38. Дополни метод addPotion(potionName) так, 
// чтобы он добавлял зелье potionName в конец массива зелий 
// в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
    // Change code below this line
    // this.potions.push (potionName,)

    // return this.potions
    // Change code above this line
//   },
// };


// 39. Дополни метод removePotion(potionName) так, 
// чтобы он удалял зелье potionName из массива зелий 
// в свойстве potions.


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName)
//     this.potions.splice(potionIndex, 1)
//     // Change code above this line
//   },
// };

// 40. Дополни метод updatePotionName(oldName, newName) так, 
// чтобы он обновлял название зелья с oldName на newName, 
// в массиве зелий в свойстве potions.


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     const potionIndex = this.potions.indexOf(oldName)
//     this.potions.splice(potionIndex, 1, newName)

//     // Change code above this line
//   },
// };

// 41. Заказчица хочет чтобы каждое зелье было представлено 
// не только именем, но и ценой, а в будущем может быть и 
// другими характеристиками. 
// Поэтому теперь в свойстве potions будет храниться массив 
// объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. 
// Возвращает значение свойства potions.

// addPotion(newPotion) - добавляет зелье newPotion 
// (уже объект) в массив в свойстве potions, 
// но только если такого зелья еще нет в инвентаре. 
// В противном случае возвращается строка.

// removePotion(potionName) - удаляет объект зелья с именем 
// potionName из массива в свойстве potions.

// updatePotionName(oldName, newName) - обновляет свойство 
// name объекта-зелья с названием oldName на newName 
// в массиве potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
    // return this.potions
  },

  removePotion(potionName) {    
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        return this.potions.splice(i, 1); 
      }    
  }
  return `Potion ${potionName} is not in inventory!`
},
  updatePotionName(oldName, newName) {
    const {potions} = this;
    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];
      if (oldName === potion.name) {
        potion.name = newName
      }
    }
  }
  // Change code above this line
};
