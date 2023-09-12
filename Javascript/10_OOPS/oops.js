// Object Literal
// Object literal is a comma separated list of name value pairs wrapped in curly braces. Object literal encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.

// var myObjectLiteral = {
//     variableKey: variableValue,
//     functionKey: function () {
//         // ...
//     }
// };

// Object literal property values can be of any data type, including array literals, functions, and nested object literals. Here is another object literal example with these property types:

var Swapper = {
    // an array literal
    images: ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],
    pos: { // nested object literal
        x: 40,
        y: 300
    },
    onSwap: function () { // function
        // code here
    }
};

// Object literal notation is also convenient for initializing objects. A property name can be computed dynamically, using the same bracket notation that arrays use to compute the index to access. Here is an example:

function makeABeep() {
    console.log('beep');
}

var myCar = {
    name: "Saturn",
    wheels: 4,
    drive: function () {
        console.log("Weeee. I'm driving!");
    }
};

myCar.drive(); // Weeee. I'm driving!

// Constructor Function
// A constructor is a function that creates and initializes an object. A constructor resembles an instance method, but it differs from a method in that it has no explicit return type, it is not implicitly invoked by a method invocation expression, and it usually has different rules for scope modifiers. Constructors often have the same name as the declaring class.

// A constructor is used in the creation of an object that is an instance of a class. An object is an instance of a class when it is created using the new keyword. The constructor is invoked when the new keyword is used to create an object. The following example illustrates the use of a constructor:

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var myCar = new Car('Eagle', 'Talon TSi', 1993);

// In the example above, the constructor function is Car() and the object type created is Car. The keyword this refers to the object being created. The properties make, model, and year are assigned to the object via the keyword this. The object myCar now contains the properties specified by the constructor.

// The new keyword creates an instance of a class. The new keyword causes the function to be invoked as a constructor instead of as a normal function. The constructor initializes the properties, which are then available to use. The new keyword also creates a link (or prototype) between the object created and the constructor function. Objects created with the new keyword are instances of the constructor function. The instanceof operator can be used to determine if an object is an instance of a specified constructor function.

// The constructor function is a template for the object. The object itself does not contain any code. All properties are assigned inside the constructor function. Methods are assigned to the prototype of the object. The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

// The following example illustrates the use of a constructor function and prototype:

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getFullCarName = function () {
    return this.make + " " + this.model + " " + this.year;
}

var myCar = new Car('Eagle', 'Talon TSi', 1993);

var info = myCar.getFullCarName();



