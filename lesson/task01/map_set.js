let map1 = new Map();

map.set('1', 'str1'); // строка в качестве ключа
map.set(1, 'num1'); // число в качестве ключа
map.set(true, 'bool1'); // булевое значение как ключ

// Помните, обычный объект Object привеодит ключи к строкам?
// Map сохраняет тип ключей, так что в это случае сохраняется 2 разных значения:
console.log(map.get(1)); // "num1"
console.log(map.get("1")); //"str1"
console.log(map.size); // 3

get set

let map = new Map();
map.set('1', 'We')
   .set(1, 'likes')
   .set(true, 'JS');

console.log(map);  

// Перебор коллекции Map
let recipeMap = new Map([
    ['Огурец', 500],
    ['Помидор', 350],
    ['Лук', 50]
]);
console.log(recipeMap);

// Перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
};

// Перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
};

// Перебор по ключам и значениям [ключ(овощи) и значение(числа)]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    console.log(entry); // огурец, 500 (и так далее)
};

//  Выполняем функцию для каждой пары [ключ(овощи) и значение(числа)]
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // огурец: 500, помидор: 350, лук: 50
});

// Работа с объектами

// Object.entries поможет создать Map
let map = new Map(Object.entries(obj));
// Object.fromEntries поможет создать объект из Map
let obj = Object.fromEntries(map);

// //------ Set ------//

let buddies = [
    'Жучка',
    'Тузик',
    'Кузя',
    'Жучка',
    'Манька',
    'Валера',
    'Барсик',
    'Жучка',
    'Фима',
    'Бобр',
];

let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies); // Мы увидим, что у нас взяли 10 косточек, а собачек было всего 6

// Перевести обратно в массив нам поможет уже известный нам метод Array.from:
let buddies = [
    'Жучка',
    'Тузик',
    'Кузя',
    'Бобик',
    'Жучка',
    'Валера',
    'Барсик',
    'Жучка',
    'Фима',
    'Бобр',
];

let uniqueBuddies = new Set(buddies);
let arr = Array.from(uniqueBuddies);
console.log(arr);

