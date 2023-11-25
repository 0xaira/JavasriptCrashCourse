/*
Truthy and Falsy values
Falsy Values: 0 , "" , undefined , null , NaN , false, document.all
Rest all are truthy values 
*/

// Call Back Functions
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// High Order Functions
// Defination : A function that takes a function as an argument or returns a function as a result is called a higher-order function.

/*
Example :
function xyz() {
    return function abc() {
        console.log("Print Successful");
    }
}

function abc(xyz) {
    xyz();
}
abc(xyz);
for each is a high order function
*/

// Constructor Functions
// Defination : A constructor function is a function that returns an object. It is called a constructor because it constructs the values of an object. In other object-oriented programming languages, the constructor is a special method used for initializing newly created objects.
/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p1 = new Person("Harry", 20);
var p2 = new Person("Ron", 21);

console.log(p1);
*/

// First Class Functions
// Defination : First class functions means that in JavaScript, functions are treated as first-class citizens. This means that they can be treated like any other variable, and can be passed as an argument of another function, can be returned by another function and can be assigned as a value to a variable.

let abc = (function () {
  console.log("Print Successful");
})(
  // New Keyword
  // Defination : The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

  // Immediately Invoked Function Expression (IIFE)
  // Defination : An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

  function xyz() {
    let a = 7;
  }
)(); // IIFE used to create private variables

let ans = (function xyz() {
  let a = 7;
  return {
    getter: function () {
      return a;
    },
    setter: function (val) {
      a = val;
    },
  };
})();

// Prototype
// Defination : The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

// Prototype Inheritance
// Defination : In JavaScript, inheritance is supported by using prototype object. Every object in JavaScript has a prototype object associated with it. The prototype object of an object is the object from which it inherits properties.

let human = {
    mortal: true,
    talk: true,
    walk: true
}
let cyborg = {
    fly: true
}
cyborg.__proto__ = human; // cyborg inherits from human
console.log(cyborg.mortal); // true
console.log(cyborg.fly); // true

// this call apply bind

/* this keyword in different context
   ~in global context this refers to window object
   ~ in function context this refers to window object
   ~in method context this refers to object itself
   ~ in event listener this refers to element on which event is attached
    Any function which is inside an object is called a method
*/

// call apply bind => these are used to change the context of this keyword in a function call 

// Suppose we have a function and an object , this keyword inside the function will refer to window object , but we want it to refer to the object itself , so we use call apply bind to change the context of this keyword  

function xyz() {
    console.log(this);
}
let obj = {
    a: 7,
    b: 8,
}
xyz.call(obj); // this will refer to obj

// call and apply are same , only difference is that call takes arguments as comma seperated values and apply takes arguments as an array

function xyz(a, b) {
    console.log(this);
    console.log(a + b);
}
let obj = {
    a: 7,
    b: 8,
}
xyz.apply(obj, [1, 2]); // this will refer to obj

// bind just binds the function to the object , it does not call the function , it returns a new function which can be called later

function xyz(a, b) {
    console.log(this);
    console.log(a + b);
}
let obj = {
    a: 7,
    b: 8,
}
let newFunc = xyz.bind(obj, 1, 2); // this will refer to obj

// Pure and Impure Functions
// Defination : A pure function is a function that always returns the same result for the same inputs. A pure function is a function where the return value is only determined by its arguments without any side effects. while an impure function is a function that may have side effects or depends on conditions from the outside its scope. An impure function may return different results when called with the same arguments. A pure function is a function that has the following properties: Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).


