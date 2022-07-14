// 1. Дополни код так, чтобы в переменной result был результат
//  выполнения функции makePizza, а в переменной pointer была
//  ссылка на функцию makePizza.

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = makePizza();
  
//   const pointer = makePizza;
  
//   2. Дополни функцию makeMessage так, чтобы она ожидала 
// вторым параметром (параметр callback) колбэк-функцию и 
// возвращала ее вызов. Функция deliverPizza или makePizza 
// будет передаваться как колбэк и ожидать аргументом имя 
// готовой доставляемой пиццы.




//   function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }
  

// 3. Дополни второй вызов функции makePizza(pizzaName, 
// callback), передав вторым аргументом инлайн колбэк-функцию 
// eatPizza(pizzaName), которая логирует строку "Eating pizza 
// /* <имя пиццы>". */

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
//   });
  
// 4.Необходимо написать логику обработки заказа пиццы. 
// Выполни рефакторинг метода order так, чтобы он принимал 
// вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра 
// pizzaName, метод order должен возвращать результат вызова 
// колбэка onError, передавая ему аргументом строку 
// "There is no pizza with a name <имя пиццы> in the 
// assortment."
// Если в свойстве pizzas есть пицца с названием из параметра
//  pizzaName, метод order должен возвращать результат вызова 
// колбэка onSuccess, передавая ему аргументом имя заказанной 
// пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и 
// вызовы методов. Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//       if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//       }
//       return onError (`There is no pizza with a name ${pizzaName} in the assortment.`);
//       },
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }
  
//   // Method calls with callbacks
//   pizzaPalace.order('Smoked', makePizza, onOrderError);
//   pizzaPalace.order('Four meats', makePizza, onOrderError);
//   pizzaPalace.order('Big Mike', makePizza, onOrderError);
//   pizzaPalace.order('Vienna', makePizza, onOrderError);
  

// 5. Функция calculateTotalPrice(orderedItems) принимает один 
// параметр orderedItems - массив чисел, и рассчитывает 
// общую сумму его элементов, которая сохраняется в переменной
// totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for 
// она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
  
//     orderedItems.forEach(function (orderedItem) {
//       totalPrice += orderedItem;
//     })
  
//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //   totalPrice += orderedItems[i];
//     // }
  
//     // Change code above this line
//     return totalPrice;
//   }

// 6. Функция filterArray(numbers, value) принимает массив 
// чисел numbers и возвращает новый массив, в котором будут 
// только те элементы оригинального массива, которые больше 
// чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for 
// она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
  
//     numbers.forEach(function (number, i) {
//       if (numbers[i] > value) {
//         filteredNumbers.push(numbers[i]);
//       }
//     })
  
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //   }
//     // }
  
//     // Change code above this line
//     return filteredNumbers;
//   }
  

// 7. Функция getCommonElements(firstArray, secondArray) 
// принимает два массива произвольной длины в параметры 
// firstArray и secondArray, и возвращает новый массив их 
// общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for 
// она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line
  
    firstArray.forEach(function (commonElements) {
      if (secondArray.includes(firstArray.element)) {
        commonElements.push(firstArray.element);
      }
    })
    // for (let i = 0; i < firstArray.length; i += 1) {
    
  
    return commonElements;
    // Change code above this line
  }
  