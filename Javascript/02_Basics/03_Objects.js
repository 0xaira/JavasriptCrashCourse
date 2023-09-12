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

// JavaScript has numerous built-in features, but it lacks certain capabilities that are available through the window object in web browsers. These additional functionalities provided by the browser can be accessed and utilized within JavaScript code.

// The window object is the global object in client-side JavaScript, including web browsers. It represents the web page loaded into the current browser window or tab. The window object is automatically created by the browser and is always present. It is the global object in a client-side JavaScript, which means that it is always available to JavaScript code running in the page. The window object has many properties that are used to configure the browser's window and the document object. The window object also has many methods that are used to perform tasks on the browser.



