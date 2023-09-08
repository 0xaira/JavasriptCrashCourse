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

//Example: Promise is created and consumed after 2 seconds
// Do an async Task, like Db calls, API calls, crytograpgy, network calls, etc
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise is created");
    resolve("Promise is created and consumed");
  }, 2000);
});

promise1.then((res) => {
  console.log(res);
  console.log("Promise is consumed");
});

// Another way directly

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise is created");
    resolve("Promise is created and consumed");
  }, 2000);
}).then((res) => {
  console.log(res);
  console.log("Promise is consumed");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      console.log("Promise is created");
    } else {
      reject("Promise is rejected");
    }
  }, 2000);
});

promise3.then((res) => {
  console.log(res);
  console.log("Promise is consumed");
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log("Promise is consumed");
});

// Async and Await
// Async and await make promises easier to write

const promise4 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({name: "Javascript", password: "123456"});
    } else {
      reject("Error: Something went wrong");
    }
  }, 2000);
});

async function myFunction() {
  try{
    const response= await promise4;
    console.log(response);
  }
  catch(err){
    console.log(err);
  }
}
myFunction();

async function getallUsers() {
  try{
    const response= await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await response.json();
    console.log(data);
  }
  catch(err){
    console.log(err);
  }
}
getallUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=> res.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err));

