const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = myNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum);