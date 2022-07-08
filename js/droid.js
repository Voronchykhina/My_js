// 8. Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags 
// со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
    name,
    price,
    image,
    tags

  // Change code above this line
};

// console.log(product.name); 

//18. Напиши функцию getProductPrice(productName) 
//которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем (свойство name) 
// в массиве products и возвращает его цену (свойство price). 
// Если продукт с таким названием не найден, 
// функция должна возвращать null.


// 19. Напиши функцию getAllPropValues(propName) 
// которая принимает один параметр propName - имя (ключ) 
// свойства. Функция должна вернуть массив всех значений 
// свойства с таким именем из каждого объекта в массиве 
// products. 
// Если в объектах нет свойства с таким именем, 
// функция должна вернуть пустой массив.


// 20. Напиши функцию calculateTotalPrice(productName) 
// которая принимает один параметр productName - 
// название товара.
//  Функция должна вернуть общую стоимость (цена * количество)
//  товара с таким именем из массива products.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки

  for (const product of products) {
    if (product.name === productName)
    return product.price * product.quantity
   }
 return 0



  // Пиши код выше этой строки
}

// 19. function getAllPropValues(propName) {
  // Change code below this line
// const result = []
// for (const value of products) {
//   if (Object.keys(value).includes(propName)) {
//     result.push(value[propName]);
//   }
// }
// return result;
  // Change code above this line
// }


// 18. function getProductPrice(productName) {
  // Change code below this line
// for (const product of products) {
//   if (product.name === productName) {
//     return product.price
//   }
// }
// return null
  // Change code above this line
// }