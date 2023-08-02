// Map

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNums = myNums.map((num) => num * 2);
console.log(newNums);

// const newNums2 = myNums.map((num) => {
//     return num * 20000000000000000000*8*8*5000000000000000;
// });
// console.log(newNums2);

//Chaining
const newNums3 = myNums.filter((num) => num % 2 === 0).map((num) => num * 2);
console.log(newNums3);

