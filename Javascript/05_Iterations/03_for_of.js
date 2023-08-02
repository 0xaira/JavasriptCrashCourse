// These loops are for Arrays specifically

// For of loop

// for(const iterator of object){       Syntax
//     console.log(iterator);
// }

// Iterator: Arrays, Strings, Maps, Sets, NodeLists, etc.
// Object: On which we want to iterate

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of myArray) {
    console.log(num);
}

const myString = "Hello World";
for (const char of myString) {
    console.log(char);
}

// What is Map ?
// Map is a collection of elements where each element is stored as a Key, value pair.

const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("c", "gamma");
myMap.set("d", "delta");
console.log(myMap);
for (const [key, value] of myMap) {
    console.log(key, value);
}

const myObject = {
    name: "John",
    age: 24,
    city: "Berlin"
}
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, value);
}
