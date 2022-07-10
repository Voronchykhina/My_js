// 1. Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].

// 2. Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

// 3. Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// 4. Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// 5. Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// 6. Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

// 7. Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

// 10. Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, 
// а в массив values все значения его свойств.

// 11. Выполни рефакторинг решения предыдущего задания добавив 
// в цикл for...in проверку на собственное свойство.

// 12. Перебери объект apartment используя метод Object.keys() 
// и цикл for...of. Запиши в переменную keys массив ключей 
// собственных свойств объекта apartment, и добавь в массив 
// values все значения его свойств.

// 13. Запиши в переменную keys массив ключей собственных 
// свойств объекта apartment, а в переменную values массив 
// всех значений его свойств. Используй методы Object.keys() 
// и Object.values().


const apartment = {
    // imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    // tags: ["premium", "promoted", "top"],
    // owner: {
    //     name: 'Henry',
    //     phone: '982-126-1588',
    //     email: 'henry.carter@aptmail.com',
    // }
};

// 15. Change code below this line
// const keys = Object.keys (apartment);
// const values = Object.values (apartment);

//12. const values = ["Spacious apartment in the city center", 4, 2153];

// Change code below this line
// const keys = Object.keys(apartment);
// for (key of keys) {
//     values.push(apartment[key]);
// }

// console.log(keys) // ["Spacious apartment in the city center", 4, 2153].


// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };

// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

  // Change code below this line

    // if (apartment.hasOwnProperty(key)) {
    //     keys.push(key);
    //     values.push(apartment[key]);
    // }
    // console.log(key);
    // console.log(apartment[key]);

//   keys.push(key);
//   values.push(apartment[key]);

  // Change code above this line
// }



// 10. Change code below this line
// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }

// 7. Change code below this line
// apartment.area = 60;

// apartment.rooms = 3;

// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// }

// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location);


// 6. Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push('trusted');

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);


// 5. Change code below this line
// const aptRating = apartment['rating'];
// console.log(aptRating);

// const aptDescr = apartment['descr'];
// console.log(aptDescr);

// const aptPrice = apartment['price'];
// console.log(aptPrice);

// const aptTags = apartment['tags'];
// console.log(aptTags);
// Change code above this line


// 4. Change code below this line
// const ownerName = apartment.owner.name;
// console.log(ownerName);

// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);

// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);

// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);

// const firstTag = apartment.tags[0];
// console.log(firstTag);

// const lastTag = apartment.tags[numberOfTags - 1];
// console.log(lastTag);
// Change code above this line



// 3. Change code below this line
// const aptRating = apartment.rating;
// console.log(aptRating);

// const aptDescr = apartment.descr;
// console.log(aptDescr);

// const aptPrice = apartment.price;
// console.log(aptPrice);

// const aptTags = apartment.tags;
// console.log(aptTags);
// Change code above this line


// const apartmentOwner = apartment.owner;
// console.log(apartmentOwner);



