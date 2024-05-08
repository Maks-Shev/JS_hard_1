const symbol = Symbol(); //Объявление 

////////////////////////////////////////////////////////////////////////
const dogID = Symbol('dog'); // Значение уникально, даже если мы создадим несколько символов с одинаковым описанием

const dog1 = Symbol('dog'); 
const dog2 = Symbol('dog'); 

console.log(dog1 == dog2); // false

////////////////////////////////////////////////////////////////////////
const dogID = Symbol('dog');
alert(dogID) // TypeError: Cannot conver a symbol value to a string
console.log(dogID); // Symbol(dog)

console.log(dogID.description); // dog можно посмотреть опимание 

////////////////////////////////////////////////////////////////////////
let id = Symbol('dogID');

let buddy = {
    [id]: 'Жучка'
}

console.log(buddy[id]); // Жучка

////////////////////////////////////////////////////////////////////////
let id = Symbol('id');
buddy[id] = "Бобик" // Идентификаторы всегда создаются уникальными

// Проблемы которые могут воозникнуть, без использования Symbol
let buddy = { name: "Тузик"}; // Объявляем в нашем скрипте свойство 'id'
buddy.id = 'Наш идентификатор'; //  ...другой скрипт тоже хочет свой идентификатор...
buddy.id = 'Их идентификатор'; // ой! Свойство перезаписано сторонней библиотерой!

// Как решить?

let buddies = {
    [Symbol('Жучка')]: 'Жучка',
    [Symbol('Мурка')]: 'Мурка',
    [Symbol('Таракашка')]: 'Таракашка',
    elephant: 'Слон'
}

console.log(buddies);

////////////////////////////////////////////////////////////////////////
let newBuddies = {};
Object.assign(newBuddies, buddies); // Object.assing скопирует все свойства, в том числе и символьные
console.log(newBuddies);

// //---- Symbol.for   ------//

// Читаем символ из главного реестр и записываем его в переменную 
let id = Symbol.for("id"); // если символа не существует, он будет создан


// Читаем его снова и записываем в другую переменную (возмежно, из другого места кода)
let idAgain = Symbol.for("id"); 

// проверяем: это один и тот же символ
alert(id === idAgain); // true


//  //---- Symbol.reyFor  ----//  //Описание символа по идентификатору
// Получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// Получаем имя по символу
console.log(Symbol.keyFor(sym)); //name
console.log(Symbol.keyFor(sym2)); //id


