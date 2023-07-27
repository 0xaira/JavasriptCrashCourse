//**********************Arrays*************************

// Arrays are used to store multiple values in a single variable.
// An array is a special variable, which can hold more than one value at a time.
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

// var car1 = "Saab";
// var car2 = "Volvo";
// var car3 = "BMW";

// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
// The solution is an array!
// An array can hold many values under a single name, and you can access the values by referring to an index number.
// You access an array element by referring to the index number.
// This statement accesses the value of the first element in cars:
// var name = cars[0];
// Array indexes start with 0. [0] is the first element. [1] is the second element.
// Array Length
// The length property of an array returns the length of an array (the number of array elements).

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitsLength = fruits.length; // fruitsLength is 4
// let anime = ["Naruto", "Bleach", "One Piece"];
// const anime2= new Array("Naruto", "Bleach", "One Piece");
// console.log(anime2);

// Array Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:

const anime= new Array("Naruto", "Bleach", "One Piece");
console.log(anime);
anime.push("Death Note");
console.log(anime);
anime.pop();
console.log(anime);
anime.shift();
console.log(anime);
anime.unshift("Death Note");
console.log(anime);

anime.join();
console.log(anime);
anime.reverse();
console.log(anime);
anime.sort();
console.log(anime);
anime.concat("Death Note");
console.log(anime);

anime.slice(1, 3);
console.log(anime);

anime.splice(1, 0, "Attack on Titan");
console.log(anime);
//Diffrence between slice and splice
// The slice() method returns the selected elements in an array, as a new array object.
// The splice() method adds/removes items to/from an array, and returns the removed item(s).

// The splice() method changes the original array and slice() method doesn’t change the original array.

anime.toString();
console.log(anime);
anime.valueOf();
console.log(anime);
anime.includes("Death Note");
console.log(anime);
anime.indexOf("Death Note");
console.log(anime);
anime.lastIndexOf("Death Note");
console.log(anime);
anime.forEach(function (element) {
    console.log(element);
}
);
anime.map(function (element) {
    console.log(element);
}
);
anime.filter(function (element) {
    console.log(element);
}
);
anime.reduce(function (element) {
    console.log(element);
}
);



