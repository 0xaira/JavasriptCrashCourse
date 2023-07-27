//Objects
//Objects are a collection of properties
//Properties are a key-value pair
//Objects are created using the new keyword
//Objects are mutable
//Objects are dynamic
//Objects are accessed using the dot notation
//Objects are accessed using the bracket notation
//Objects are accessed using the for-in loop
//Objects are accessed using the Object.keys() method
//Objects are accessed using the Object.values() method

// Object Literals Method of Creating Objects

let myCar = {
   
    make: "Ford",
    model: "Mustang",
    year: 1969,
    color: "red",
    engine: {
        size: 5.0,
        make: "bmw",
        fuel: "petrol",
        pistons: [
            { maker: "BMW" },
            { maker: "BMW2" }
        ]
    },
    honk: function () {
        console.log("beep beep");
    }
};
console.log(myCar);
console.log(myCar.make);
console.log(myCar["model"]);
myCar.color = "blue";
console.log(myCar.color);



