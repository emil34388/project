'use strict'; //use strict yazmayanda səhvləri bilmir. use strict yeni standartdı və səhv olanda çıxardır


console.log(4/0);
console.log('emil'*20)

let persone = {
    name: 'Emil',
    age: 25,
    isMarried: false
};

console.log(persone['name']);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[0])

// alert('Hello World')

// 
// let answer = +prompt('are you 18 old year?', 'Yes');

// console.log(typeof(answer));

// console.log('arr'+'-object')
// console.log('5'+'-object')

let incr = 10, //Bərabər işarəsi bir dəfə qoyulanda bu prisvaivaniyadı
    decr = 10;

    // incr++;
    // decr--;

    console.log(++incr);
    console.log(--decr);

   console.log(5%2);   //cavab 1 verir. 5-i 2-yə bölür qalığı 1qalır 
   console.log('2' == 2); // Iki dənə bərabərlikdi.
   console.log('2' === 2); // Üç dənə olanda stroqaya proverka tip dannıx.

let isChecked = true,
    isClose = true;

    console.log(isChecked && isClose); // "&" bu işarə "və" deməkdi. ikisidə true olanda true cavabı qaytarır.
    
let isFirst = true,
    isSecond = false;

    console.log(isFirst && isSecond); // biri true o biri false olanda false cavabı qaytarır
    
let isThird = true,
    isFifth = false;

    console.log(isThird || isFifth); // "||" Bu işarə "və ya" deməkdi

