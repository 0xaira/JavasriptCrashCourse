const tinderProfile = {
    name: 'Elon Musk',
    age: 45,
    hobbies: ['Coding', 'Cricket', 'Gaming'],
    isOnline: true,
    lastSeen: '2021-07-07T09:44:27.000Z',
} 
console.log(tinderProfile);

//Creating Singleton Objects using new keyword
let myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
myCar.color = "red";
console.log(myCar);
console.log(myCar.make);
console.log(myCar["model"]);
myCar.color = "blue";
console.log(myCar.color); 

//Objects inside Objects
let myCar2 = new Object();
myCar2.make = "Ford";
myCar2.model = "Mustang";
myCar2.year = 1969;
myCar2.color = "red";
myCar2.engine = new Object();
myCar2.engine.size = 5.0;
myCar2.engine.make = "bmw";
myCar2.engine.fuel = "petrol";
myCar2.engine.pistons = new Array();
myCar2.engine.pistons[0] = new Object();
myCar2.engine.pistons[0].maker = "BMW";
myCar2.engine.pistons[1] = new Object();
myCar2.engine.pistons[1].maker = "BMW2";
console.log(myCar2);
console.log(myCar2.engine.pistons[0].maker);
console.log(myCar2.engine.pistons[1].maker);

//Obkects inside Objects non singleton
 let marvel_heros = new Object();
    marvel_heros.thor = "Thor";
    marvel_heros.ironman = "Ironman";
    marvel_heros.spiderman = "Spiderman";
    marvel_heros.drstrange = "DR Strange";
    marvel_heros.hulk = "Hulk";
    marvel_heros.captainamerica = "Captain America";
    marvel_heros.blackwidow = "Black Widow";
    marvel_heros.blackpanther = "Black Panther";
    marvel_heros.antman = "Antman";
    marvel_heros.wolverine = "Wolverine";
    marvel_heros.deadpool = "Deadpool";
    marvel_heros.groot = "Groot";
    marvel_heros.rocket = "Rocket";
    marvel_heros.gamora = "Gamora";
    marvel_heros.starlord = "Starlord";
    marvel_heros.drax = "Drax";

    let dc_heros = new Object();
    dc_heros.superman = "Superman";
    dc_heros.batman = "Batman";
    dc_heros.flash = "Flash";
    dc_heros.joker = "Joker";
    dc_heros.aquaman = "Aquaman";

    let heros = new Object();
    heros.marvel = marvel_heros;
    heros.dc = dc_heros;
    console.log(heros);
    console.log(heros.marvel.thor);
    console.log(heros.dc.superman);

const obj1={ a:1, b:2, c:3 };
const obj2={ d:4, e:5, f:6 };
const obj3= Object.assign({},obj1, obj2);
console.log(obj3);
const obj4= {...obj1, ...obj2};
console.log(obj4);
const obj5= {...obj1, ...obj2, ...obj3};
console.log(obj5);

console.log(Object.keys(marvel_heros));
console.log(Object.values(marvel_heros));
console.log(Object.entries(marvel_heros));
console.log(dc_heros.hasOwnProperty('superman'));


