let products = [
    {
        name: 'milk',
        type: 'milk',
        price: 10000,
        qt: 10
    },
    {
        name: 'apple',
        type: 'fruit',
        price: 6000,
        qt: 8
    },
    {
        name: 'vodka',
        type: 'alcohol',
        price: 70000,
        qt: 20
    },
    {
        name: 'tvorog',
        type: 'milk',
        price: 15000,
        qt: 15
    },
    {
        name: 'banan',
        type: 'fruit',
        price: 25000,
        qt: 20
    },
    {
        name: 'pivo',
        type: 'alcohol',
        price: 50000,
        qt: 42
    },
    {
        name: 'cheese',
        type: 'milk',
        price: 40000,
        qt: 20
    },
    {
        name: 'persik',
        type: 'fruit',
        price: 23000,
        qt: 5
    },
    {
        name: 'mochito',
        type: 'alcohol',
        price: 120000,
        qt: 25
    }
]

let total = 0;
let avarege = 0;
let milk = 0;
let alcohol = 0;
let friuts = 0;
let discount = 60;
let disc = 20;



for (let item of products) {
    total += item.price

    if (item.type === 'milk') {
        milk++
    } else if (item.type === 'alcohol') {
        alcohol++
    } else if (item.type === 'fruit') {
        friuts++
    }

    item.salePrice = item.price - (discount * item.price / 100)

    if (item.qt <= 10) {
        item.saleP = item.price + (disc * item.price / 100)
    } else if (item.qt >= 20) {
        item.saleP = item.price - (disc * item.price / 100)
    }

}

avarege = total / products.length

console.log('Cумма' + '-' + total);
console.log('Cр.ариф' + '-' + avarege);
console.log('Кол-во молочных продуктов' + '-' + milk);
console.log('Кол-во алкогольных продуктов' + '-' + alcohol);
console.log('Кол-во фруктовых продуктов' + '-' + friuts);
console.log(products);

let max = products.reduce((a, b) => a.price > b.price ? a : b)
let min = products.reduce((a, b) => a.price < b.price ? a : b)
console.log(max);
console.log(min);