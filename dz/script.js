const chefs = {
    "Виктор": "Пицца",
    "Ольга": "Суши",
    "Дмитрий": "Десерты"
}
  

const dishes = new Map([
    ['Пицца "Маргарита"', "Виктор"],
    ['Пицца "Пепперони"', "Виктор"],
    ['Суши "Филадельфия"', "Ольга"],
    ['Суши "Калифорния"', "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
]);

const orders = new Map();

function addOrder(customer, dishNames) {
    if (!orders.has(customer.name)) {
        orders.set(customer.name, []);
    }

    const customerOrders = orders.get(customer.name);
    dishNames.forEach(dishName => {
        const trimmedDishName = dishName.trim();
        if (dishes.has(trimmedDishName)) {
            customerOrders.push(trimmedDishName);
        } else {
            console.error(`Блюдо '${dishName}' не найдено`);
        }
    });
}

addOrder({ name: 'Алексей' }, ['Пицца "Пепперони"', 'Тирамису']);
addOrder({ name: 'Мария' }, ['Суши "Калифорния" ', 'Пицца "Маргарита"']);
addOrder({ name: 'Ирина' }, ['Чизкейк']);

function getOrderInfo(customer) {
    if (!orders.has(customer.name)) {
        return `Заказы клиента не найдены`;
    }

const customerOrders = orders.get(customer.name);
const preparedDishes = [];

customerOrders.forEach(dishName => {
    const cookName = dishes.get(dishName);
    preparedDishes.push(`${dishName} - готовит: '${cookName}'`);
});
    return `Заказ клиента '${customer.name}: ${preparedDishes.join(', ')}'`
}



console.log(getOrderInfo({ name: "Алексей" })); 
console.log(getOrderInfo({ name: "Мария" })); 
console.log(getOrderInfo({ name: "Ирина" })); 

