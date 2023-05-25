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

// function cutFruitPieces(fruit) {
//     return fruit*4;
// }
// function fruitProcessor(apples,oranges) {
//     const applePieces=cutFruitPieces(apples);
//     const orangePieces=cutFruitPieces(oranges);
//     const juice=`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

// let dolphinScore1=96;
// let dolphinScore2=108;
// let dolphinScore3=89;
// let koalasScore1=88;
// let koalasScore2=91;
// let koalasScore3=110;
// const calcAverage=(a,b,c)=>(a+b+c)/3;
// let dolphinAverage=calcAverage(dolphinScore1,dolphinScore2,dolphinScore3);
// let koalasAverage=calcAverage(koalasScore1,koalasScore2,koalasScore3);
// console.log(dolphinAverage,koalasAverage);
// function checkWinner(dolphinAverage,koalasAverage) {
//     if(dolphinAverage>=2*koalasAverage){
//         console.log(`Dolphins win (${dolphinAverage} vs ${koalasAverage})`);
//     }else if(koalasAverage>=2*dolphinAverage){
//         console.log(`Koalas win (${koalasAverage} vs ${dolphinAverage})`);
//     }else{
//         console.log(`No team wins`);
//     }
// }
// checkWinner(dolphinAverage,koalasAverage);

// const calcAverage=(a,b,c)=>(a+b+c)/3;
// console.log(calcAverage(3,4,5));
// let scoreDolphins=calcAverage(44,23,71);
// let scoreKoalas=calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKoalas);
// function checkWinner(scoreDolphins,scoreKoalas) {
//     if(scoreDolphins>=2*scoreKoalas){
//         console.log(`Dolphins win (${scoreDolphins} vs ${scoreKoalas})`);
//     }else if(scoreKoalas>=2*scoreDolphins){
//         console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`);
//     }else{
//         console.log(`No team wins`);
//     }
// }
// checkWinner(scoreDolphins,scoreKoalas);
// checkWinner(576,111);
// checkWinner(111,576);

// const friends=['Michael','Steven','Peter'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);
// friends[2]='Jay';
// console.log(friends);
// const firstName='Jonas';
// const jonas=[firstName,'Schmedtmann',2037-1991,'teacher',friends];
// console.log(jonas);
// console.log(jonas.length);
// //Exercise
// const calcAge=function (birthYear) {
//     return 2037-birthYear;
// }
// const years=[1990,1967,2002,2010,2018];
// console.log(calcAge(years));
// const age1=calcAge(years[0]);
// const age2=calcAge(years[1]);
// const age3=calcAge(years[years.length-1]);
// console.log(age1,age2,age3);
// const ages=[calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
// console.log(ages);









