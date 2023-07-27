const marvel_heros = ["Thor", "Ironman", "Spiderman", "DR Strange"];
const dc_heros = ["Superman", "Batman", "Flash", "Joker"];
dc_heros.push("Harley Quinn");
marvel_heros.push(dc_heros);
// console.log(marvel_heros);

//concat two arrays
const heros = marvel_heros.concat(dc_heros);
console.log(heros);
//spread operator
const heros2 = [...marvel_heros, ...dc_heros];
console.log(heros2);
// Difference between spread operator and concat
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// The spread operator is used to merge elements of arrays. It is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements.

//flat() method
const heros3 = ["Thor", "Ironman", "Spiderman", "DR Strange", ["Superman", "Batman", "Flash", "Joker"]];
console.log(heros3);
console.log(heros3.flat());
console.log(heros3.flat(Infinity));

console.log(Array.from("Hello"));
console.log(Array.from({name: "Lucifer"}));
console.log(Array.from("Hello", (x) => x + "1"));

//Array of method
const heros4 = Array.of("Thor", "Ironman", "Spiderman", "DR Strange");
console.log(heros4);
