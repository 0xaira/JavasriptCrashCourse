/*
Truthy and Falsy values
Falsy Values: 0 , "" , undefined , null , NaN , false, document.all
Rest all are truthy values 
*/

// Call Back Functions 
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// First Class Functions
// Defination : First class functions means that in JavaScript, functions are treated as first-class citizens. This means that they can be treated like any other variable, and can be passed as an argument of another function, can be returned by another function and can be assigned as a value to a variable.
function x(y) {
    y();
}
x(function() {console.log("Print Successful");});
