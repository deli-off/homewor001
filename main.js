let products = [
    {
        name: 'milk',
        type: 'milk',
        price: 10000
    },
    {
        name: 'apple',
        type: 'fruit',
        price: 6000
    },
    {
        name: 'vodka',
        type: 'alcohol',
        price: 70000
    },
    {
        name: 'tvorog',
        type: 'milk',
        price: 15000
    },
    {
        name: 'banan',
        type: 'fruit',
        price: 25000
    },
    {
        name: 'pivo',
        type: 'alcohol',
        price: 50000
    },
    {
        name: 'cheese',
        type: 'milk',
        price: 40000
    },
    {
        name: 'persik',
        type: 'fruit',
        price: 23000
    },
    {
        name: 'mochito',
        type: 'alcohol',
        price: 120000
    },
]

// Найти общ сумму
// Найти среднюю цену
// найти самый дорогой продукт
// найти самый дешевый продукт
// let sumPrice = 0;


let sumPrice = 0;
let maxSum = 0;
let minSum = 0;

for (let item of products) {
    // 1
    sumPrice += item.price

    // 3-4
    if (item.price > products.length) {
        maxSum = item
    }
    if (item.price < products.length) {
        minSum = item
    }
}

console.log(minSum);
console.log(maxSum);

let total = products.reduce((a, b) => {
    return a + b.price
}, 0)
console.log(sumPrice);
console.log(total / products.length);