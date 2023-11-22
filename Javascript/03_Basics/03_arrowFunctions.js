const animeCharacter = {
    name: "Lelouch",
    age: 18,
    anime: "Code Geass",
    power: "Geass",
    friends: ["Suzaku", "C.C.", "Kallen", "Shirley", "Rolo", "Nunnally", "Milly", "Nina"],
    family: {
        father: "Charles",
        mother: "Marianne",
        sister: "Nunnally",
        brother: "Rolo",
    },
    description : function(){
        console.log(`Name is ${this.name} and age is ${this.age} and anime is ${this.anime} and power is ${this.power}`);
    }

}
console.log(animeCharacter);
console.log(animeCharacter.name);

//Arrow Function

const sum = (a, b) => {   // Arrow Function
    return a + b;      // Function Body
}
console.log(sum(2, 3)); // Function Call
//Syntax 
//datatype variable name = (parameter) => {function body}
// ()=>{} // Arrow Function


const sum1 = (a, b) => a + b;   // Arrow Function
console.log(sum1(2, 3)); // Function Call



