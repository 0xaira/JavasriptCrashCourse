'use strict';
// let hasDriversLicense=false;
// const passTest=true;
// if(passTest)hasDriversLicense=true;
// if(hasDriversLicense)console.log('I can drive :D');
// // const interface='Audio';
// // const private=534;
// function logger(){
//     console.log('My name is Jonas');
// }
// // calling/running/invoking function
// logger();
// logger();

// function fruitProcessor(apples,oranges){

//     console.log(apples,oranges);
//     const juice=`Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// fruitProcessor(5,0);
// const appleJuice=fruitProcessor(5,0);
// console.log(appleJuice);
// console.log(fruitProcessor(5,0));

// const appleOrangeJuice=fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear){
//     return 2021-birthYear;
// }
// const age1=calcAge1(1991);
// console.log(age1);

// const calcAge2=function(birthYear){
//     return 2021-birthYear;
// }
// const age2=calcAge2(1991);
// console.log(age2);

// const calcAge3=birthYear=>2021-birthYear;
// const age3=calcAge3(1991);
// console.log(age3);

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

// function cutFruitPieces(fruit){
//     return fruit*4;
// }
// function fruitProcessor(apples,oranges){
//     const applePieces=cutFruitPieces(apples);
//     const orangePieces=cutFruitPieces(oranges);
//     const juice=`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));


// const calcAge=function(birthYear){
//     return 2021-birthYear;
// }
// const yearsUntilRetirement=function(birthYear,firstName){
//     const age=calcAge(birthYear);
//     const retirement=65-age;
//     if(retirement>0){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     }else{
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }
// console.log(yearsUntilRetirement(1991,'Jonas'));
// console.log(yearsUntilRetirement(1950,'Mike'));

// const calcAverage=(a,b,c)=>(a+b+c)/3;
// const dolphinAverage=calcAverage(44,23,71);
// const koalasAverage=calcAverage(65,54,49);
// console.log(dolphinAverage,koalasAverage);
// function checkWinner(avgDolphins,avgKoalas){
//     if(avgDolphins>=2*avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }else if(avgKoalas>=2*avgDolphins){

//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     }else{
//         console.log('No team wins...');
//     }
// }
// checkWinner(dolphinAverage,koalasAverage);
// checkWinner(576,111);

const friend1='Michael';
const friend2='Steven';
const friend3='Peter';
const friends=['Michael','Steven','Peter'];
console.log(friends);
const y=new Array(1991,1984,2008,2020);
console.log(y);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);
friends[2]='Jay';
console.log(friends);
// friends=['Bob','Alice'];
// console.log(friends);
const firstName='Jonas';
const jonas=['Jonas','Schmedtmann',2037-1991,'teacher',friends];
console.log(jonas);
console.log(jonas.length);

