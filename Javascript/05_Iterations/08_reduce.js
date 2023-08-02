// Reduce

// Syntax
// array.reduce((accumulator, currentValue) => {        
//     return accumulator + currentValue;
// }, 0);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = myNums.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, 100);
console.log(sum);

const myShoppingCart = [
    {
        name: "Laptop",
        price: 1000,
        quantity: 1,
    },
    {
        name: "Headphones",
        price: 100,
        quantity: 2,
    },
    {
        name: "Smartphone",
        price: 500,
        quantity: 1,
    },
    {
        name: "Charger",
        price: 50,
        quantity: 1,
    },
];

const total = myShoppingCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity;
}
, 0);
console.log(total);

