
// Synchronus Javascript
// Defination : It means that code is executed line by line and in order that it appears. One line of code is executed at a time. It waits for the previous line to finish executing before it can move on to the next line.

// Asynchronus Javascript
// Defination : It means that code doesn't have to wait for the previous line to finish executing before it can move on to the next line. It can execute multiple lines at the same time. 

// setTimeout, setInterval, fetch, XMLHttpRequest, Promises, async/await are the examples of Asynchronus Javascript 

// Asynchronus Javascript is used to make the web page more responsive and interactive. Mainly used for network requests like fetching data from the server, sending data to the server, etc.

// Callbacks, Promises, Async/Await are the ways to handle Asynchronus Javascript

// Callbacks
// Defination : A callback is a function which runs after asynchronous code has finished executing. It is a function that is passed to another function as an argument. It is called after the function has finished executing. It is used to make sure that a function is not going to run before a task is completed but will run right after the task has completed. It is used to handle asynchronous code. 

// Example
// setTimeout(() => {
//     console.log('I am from setTimeout');
// }, 1000);

//Event Loop
// Defination : The event loop is a mechanism that makes sure that the code in the call stack is executed in order that it appears. It is a loop that checks the call stack and the callback queue. If the call stack is empty, it takes the first callback from the callback queue and pushes it to the call stack. If the call stack is not empty, it waits until the call stack is empty and then it takes the first callback from the callback queue and pushes it to the call stack.  

// fetch, XMLHttpRequest, Promises, axios ,setTimeout, setInterval are used to write asynchronous code in Javascript

//callbacks, then and catch, async and await are used to handle asynchronous code in Javascript.


// Promises 
// Promises => Resolve or Reject
// We will store it in a variable
// If promise is resolved then we will use , then
// If promise is rejected then we will use , catch

// Example
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success');
//         // reject('Error');
//     }, 1000);
// });

// promise
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// Promise Chaining
// Defination: 
// Example
// const task1 = new Promise((resolve, reject) => {
//     resolve('Task 1 is completed');
// });

// const task2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Task 2 is completed');
//     }, 2000);
// });

// const task3 = new Promise((resolve, reject) => {
//     resolve('Task 3 is completed');
// }
// );

// task1 
// .then((res) => {
//     console.log(res);
//     return task2;
// })
// .then((res) => {
//     console.log(res);
//     return task3;
// })
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// }
// );


// Async/Await
// Defination : Async/Await is a way to handle asynchronous code. It is a syntactical sugar over promises. We don't have to use .then and .catch to handle promises. 
// If we are using async code then we have to wait for it to finish executing before we can move on to the next line. We can use await keyword to wait for the async code to finish executing. We can only use await keyword inside an async function.
// Example
// Before Async/Await

function getData() {
    fetch('https://randomuser.me/api/')
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
    })
}
getData();


// After Async/Await
async function getData() {
    const raw = await fetch('https://randomuser.me/api/');
    const data = await raw.json();
    console.log(data);
}
getData();


// Async/Await with try and catch
async function getData() {
    try {
        const raw = await fetch('https://randomuser.me/api/');
        const data = await raw.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}
getData();

// Concurency 
// Defination : It means that multiple things are happening at the same time. Stack and Callback Queue are used to handle concurency in Javascript. 

// Parallelism
// Defination : It means that multiple things are happening at the same time. Web APIs are used to handle parallelism in Javascript. Using computer processor to execute multiple things at the same time is called parallelism. 

// Throttling
// Defination : It means that we are limiting the number of times a function can be called in a given time. It is used to improve the performance of the application.









