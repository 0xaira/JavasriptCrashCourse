// For in loop

// for(const iterator in object){       Syntax
//     console.log(iterator);
// }

const myObject = {
    name: "John",
    age: 24,
    city: "Berlin"
}
for (const key in myObject) {
    console.log(key);
}

for (const key in myObject) {
    console.log(myObject[key]);
}

for (const key in myObject) {
    console.log(key, myObject[key]);
}


const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "C#", "PHP", "Ruby", "Go", "Swift"];

for (const index in programmingLanguages) {
    console.log(index);
}

for (const index in programmingLanguages) {
    console.log(programmingLanguages[index]);
}

for (const index in programmingLanguages) {
    console.log(index, programmingLanguages[index]);
}

