//Promises 
//Promises are used to handle asynchronous operations in JavaScript.
//They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
//Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.
//Multiple callback functions would create callback hell that leads to unmanageable code.
//Events were not good at handling asynchronous operations.
//Promises are the ideal choice for handling asynchronous operations in the simplest manner.
//They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

//A Promise has four states:
//1. fulfilled: Action related to the promise succeeded
//2. rejected: Action related to the promise failed
//3. pending: Promise is still pending i.e not fulfilled or rejected yet
//4. settled: Promise has fulfilled or rejected

//A promise can be created using Promise constructor.
//It takes a function as an argument which takes two functions as parameters.
//The first parameter of the function is used to handle the promise when it is fulfilled and the second parameter is used to handle the promise when it is rejected.
//Syntax:
//let promise = new Promise(function(resolve, reject) {
//  // promise description
//});

//Example:
let promise = new Promise(function(resolve, reject) {
 let a = 1 + 1;
 if(a == 2) {
   resolve('Success');
 } else {
   reject('Failed');
 }
});

