const lessons = new Map();
lessons.set('Математика', 'Смирнов');
lessons.set('История', 'Иванова');

console.log(`Преподаватель по математике: ${lessons.get('Математика')}`);

////////////////////////////////////////////////////////////

const stusents = new Map();
stusents.set('Математика', ['Лукина', 'Иванов', 'Петров']);
stusents.set('История', ['Иванов', 'Петров']);

// // for (let stud of stusents.values()) {
// //     console.log(stud);
// // };
stusents.forEach((value, key, map) => {
    console.log(`Ученики - ${key}: ${value}`);
});

const ivanLessons = new Set()
ivanLessons.add('Математика')
           .add('История');

const ivanStud = new Map();
ivanStud.set('Иван', ivanLessons);


console.log(`Уроки Ивана: ${[...ivanStud.get('Иван')]}`);
