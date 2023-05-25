//Functions

// function juiceMaker(apples,oranges) {
//     let juice=`Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// juiceMaker(5,0);
// console.log(juiceMaker(5,0));

// function calcAge1(birthYear) {
//     return 2021-birthYear;
// }
// let age1=calcAge1(1991);
// console.log(age1);

// const calcAge2=function (birthYear) { 
//     return 2021-birthYear;
// }
// let age2=calcAge2(1991);
// console.log(age2);

// Arrow Function
//  const calcAge3=birthYear=>2021-birthYear;
//     let age3=calcAge3(1991);
//     console.log(age3);

// const yearsUntilRetirement=birthYear=>{
//     const age=2021-birthYear;
//     const retirement=65-age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1991));

// const yearsUntilRetirement1=(birthYear,firstName)=>{
//     const age=2021-birthYear;
//     const retirement=65-age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement1(1991,'Jonas'));

function cutFruitPieces(fruit) {
    return fruit*4;
}
function fruitProcessor(apples,oranges) {
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);
    const juice=`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(2,3));





