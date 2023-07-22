// Stack(Primitive data types) and Heap(Reference data types)

let animeCharacter = "Lawliet";
let animeCharacter2 = animeCharacter;
animeCharacter = "Light";
console.log(animeCharacter, animeCharacter2);

let animeCharacter3 = {
    name: "Lawliet",
    age: 21,
}
let animeCharacter4 = animeCharacter3;
animeCharacter3.name = "Light";
console.log(animeCharacter3, animeCharacter4);

// Primitive data types are stored in stack
// Reference data types are stored in heap

// Primitive data types are copied by value
// Reference data types are copied by reference

// Primitive data types are immutable
// Reference data types are mutable

// Primitive data types are compared by value
// Reference data types are compared by reference

