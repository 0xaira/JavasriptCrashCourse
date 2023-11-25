/*
How Javscript Works
How Javascript Code is Executed
Hoisiting in Javascript
How Function Works
Undefine vs Not Defined
The Scope Chain & Lexical Scoping
Let,Const,Temporal Dead Zone
Scope Shadowing
Closures
First Class Funstions
Callback Functions
Event Loop
JS Engine Architecture
setTimeout, setInterval
Higher Order Functions
map,reduce,filter

Callback Hell
Promises
Promise Chaining
Async/Await
Promise Api

Interveiw Questions
Polyfill for Bind()
Debounceing and Throttling
Call,Apply,Bind
Currying
Async vs Defer
Event Bubbling and Capturing
Event Delegation
Prototype Inheritance
Throttling
Local Storage vs Session Storage
Cors

*/

/*
~How JavaScript works?
 *Everything in JavaScript happens inside an "execution context".

Execution Context: When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

Execution context has two component
1)Memory Component[Variable Environment] 
-This is the place where all variables and functions are stored as key value pairs. eg-{key: value ||  n:2;} 

 2)code component[Thread of execution]
-This is the place where code is executed one line at a time

Note-
*JavaScript is a synchronous single-threaded language

-Single threaded means JavaScript can execute once command at a time
-Synchronous single-threaded that means JavaScript can execute one command at a time in a specific order.



*/

/*
~An Execution Context
1. Whenever any JavaScript code is executed an execution context is created and it is the Global Execution Context.
2. An Execution Context is basically a box which has two components called Memory Component(Variable Environment) and Code Component(Thread Of Execution).
3. The Execution context is created in two phases
   a. Memory Creation Phase : In this Phase, Memory is allocated to all the variables and functions which are present in the           global scope. Special keyword Undefined in case of variables and literally the whole function in case of functions.
   b. Code Execution Phase : In this Phase, code is executed line by line.

4. Whenever there is a function invocation an all new execution context is created and same process is followed again.
5. If there is any function parameter then it is also allocated memory while creating the execution context of the function.
6. Whenever return keyword is encountered , it means the task of function is over and it returns back the control of the program back to the place where it was invoked. and with this this execution context is deleted from stack.

7. Call Stack is basically a stack which maintains the order of execution of execution context. Whenever a code is executed the Global Execution Context is pushed into the stack first and later on as per the function invocation the  execution context is pushed into the stack. When the function code is done executing the execution context is popped out and last the Global Execution Context s also deleted.




*/

/*
~Hoisting in JavaScript
1. Hoisting in JavaScript is a process in which all the Variables, Functions and Class defination are declared BEFORE execution of the code
2. Arrow functions enact as variables and get "undefined" during the memory creation phase while functions defination is stored AS IT IS.
3. Variables are initialised to UNDEFINED when they are declared and Function defination is stored AS IT IS.
4. They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
5. UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
6. Function expressions will also behave as Variable with UNDEFINED value.

*/

/*
~ how functions work
1. We learnt how functions work in JS.
2. At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase.
3. In the first phase, the variables are assigned "undefined" while functions have their own code.
4. Whenever there is a function declaration in the code, a separate local execution context gets created having its own phases and is pushed into the call stack.
5. Once the function ends, the EC is removed from the call stack.
6. When the program ends, even the global EC is pulled out of the call stack
*/

/*
 window object is created by the JS engines of the respective browsers when global execution context is created.
	• whenever an execution context is created a "this" variable is also created.
	• at the global level "this" points to the global object( window object in case of browsers).
	• anything that is not inside a function is the "global space".
	• whenever we create any variables or functions in the "global space", they get attached to the global object( window object in case of browsers).
	
	so to access the variables/function defined in the global space , 
	we can use any of the below:
		console.log(window.a);
		console.log(a);
		console.log(this.a)             //at the global space level, where this points to the window object

*/

/*

~Undefine vs Not Defined
1.Undefined is a Special Placeholder which is used to reserve memory for the variables in the memory creation phase. Even before a single line of code is executed JS engine assigns undefined to the variables.

2.Not Defined means if we try to console or access any variable which is not declared in the code then we get Not Defined error.

3. JS is a loosely typed language or weakly typed language means it does not attaches its variables to specific data types like in C++ and java.

4.Remember undefined !== not defined.
*/

/*
~Lexical environment/Scope chain
0) Lexical environment = EC's Local Memory + Reference to Lexical Environment of its parent.

1) Lexical Environment of its parent is the scope where a function is physically present or defined. So, suppose a function x(), is defined and invoked in the GEC, when function x()'s EC is pushed in the call stack, it stores a reference to its parent's lexical environment i.e. the GEC's memory.

2) Whenever a new Execution Context is pushed in the Call Stack it holds a reference to the Lexical Environment of its parent, i.e. the EC's memory from where it was invoked.

3) Global execution context holds reference to null.

4)  Javascript engine first looks for the variable/function being accessed in the local scope of the function, and if not found, it keeps on searching the lexical environment of its parent until it finds the variable/function being accessed.

5) The mechanism mentioned in point 4 above is called SCOPE CHAIN.

6) If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the  browser's console.

*/


/*

~Temporal Dead Zone
1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
2. Temporal Dead Zone exists until variable is declared and assigned a value.
3. window.variable OR this.variable will not give value of variable defined using let or const.
4. We cannot redeclare the same variable with let/const(even with using var the second time).
5. const variable declaration and initialisation must be done on the same line.
6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.

*/

/*
~Scope Shadowing
1. Code inside curly bracket is called block.
2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
4. Shadowing of variables using var, let and const.
5. The shadow should not cross the scope of original otherwise it will give error.
6. shadowing let with var is illegal shadowing and gives error.
7. var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.

Block: It is used to combine multiple statements in a single place where JS expects a single statement. It is used in if, else, loops, functions etc.
Scope shadowing in JavaScript refers to the situation where a variable declared in a local scope has the same name as a variable in its containing (outer) scope. As a result, the inner variable "shadows" or takes precedence over the outer variable within its scope. This can lead to unexpected behavior if not handled properly.

*/

/*

Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to(It's Lexical Environment). Its not just that function alone it returns but the entire closure.

1. Closure is a function bundled with its lexical environment.
2. Closure is created when a function is returned from another function.
3. Closure is created when a function is passed as an argument to another function.
4. Closure is created when an inner function is returned from an outer function.


*/


/*
~Important Question on Closure

function x(){
    for(var i = 1 ; i <= 5 ; i ++){
        setTimeout(function (){
            console.log(i);
        },i * 1000);
    }
}
x(); 6 6 6 6 6

here function remembers the reference of i and not the value of i(closure). So, when the function is invoked after 1 sec, the value of i is 6 as the loop has already ended and i is 6. So, 6 is printed 5 times. 

function x(){
    for(let i = 1 ; i <= 5 ; i ++){
        setTimeout(function (){
            console.log(i);
        },i * 1000);
    }
}
x(); 1 2 3 4 5

here let creates a new memory for i in each iteration of the loop. So, when the function is invoked after 1 sec, the value of i is 1 as the loop has not ended and i is 1. So, 1,2,3,4,5 is printed. 

function clock(){
    for(var i = 1 ; i <= 5 ; i ++){
        function close(i){
            setTimeout(function (){
                console.log(i);
            },i * 1000);
        }
        close(i);
    }
}
clock();  1 2 3 4 5 
 
Here close is getting called for each value of i. And for each close() called a new execution context is getting created and in execution phase of that context new callback function context is created with lexical environment, which is reffering to i with which close() was called as close(i) was immediate parent of that callback function. Above cycle goes on and on until for loop ends.
  


*/

/*
~Functions
1.  What is Function Statement ?
A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
      For Ex  -  function xyz(){
                            console.log("Function Statement");
                       }

2.  What is Function Expression ?
A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
      For Ex - var a = function(){
                            console.log("Function Expression");
                    }

3.  What is Anonymous Function ?
A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
      For Ex - function(){
                     }

4.  What is Named Function Expression ?
A.  A function with a name is known as Named Function Expression.
      For Ex - var a = function xyx(){
                            console.log("Names Function Expression");
                     }

5.  Difference b/w Parameters and Arguments ?
A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
       For Ex - function ab( param1, param2 ){
                              console.log("
                      }
       & When we call this function & pass a variabel in this ( ) that is our Arguments
       For Ex - ab( 4, 5 );

6.  What is First Class Function Or First class citizens?
A.   The Ability of use function as value,
*     Can be passed as an Argument,
*     Can be executed inside a closured function &
*     Can be taken as return form.
       For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     } 

7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.




*/

/*

~Callback Functions
1. Function that is passed on as argument to another function is called callback function.
2. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous. If we don't use callback function, this will result in blocking of code(Blocking the main thread).
3. Event listeners can also invoke closures with scope.
4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

1. Callback functions are the functions which are passed as an argument to another function and then invoked inside the outer function.

Deep Dive about event listeners 
Closure with event listeners
Scope of event listeners
Garbage collection in event listeners

*/

/*

1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
4. Event loop continuously observes call stack and when it is empty it transfers tasks to call stack.
5. Micro task is given priority over callback tasks.
6. Too many micro tasks generated can cause Starvation (not giving time to callback tasks to execute).


*/


/*

~JS Engine Architecture
1. JS runtime environment contains all elements required to run JS.
2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
3. JS engine is a piece of code.
4. Code go through Parsing ---> Compilation -----> Execution.
5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
6. Modern JS engine follows JIT(Just IN Time) compilation, it interprets while it optimises code as much as it can.
7. Execution and Compilation are done together.
8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
9. Mark and sweep algorithm is used for garbage collection. It marks the memory that is not used and sweeps it. 

*/

/*
~setTimeout 
1. The setTimeout function stores it in the callback queue which is executed only after call stack is empty, even if setTimeout is set to 0ms. 
Concurrency model of JS: JS is single threaded and synchronous but it has web API's which are asynchronous and non-blocking. 
2. setTimeout ensures that minimum it will take the time mentioned because it may be paused due to call stack not empty.

*/

/*
~Higher Order Functions
1. Functions that take another function as argument or return a function are called higher order functions.
1. Follow DRY(Don't Repeat Yourself) principle while coding.
2. Use function to stop writing repeating line of codes.

4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
5. If we use Array.prototype.function-name. This function is accessible to any array in your code.

*/

/*
~Map Filter Reduce


*/

/*
Issues with Callbacks

~Callback Hell
1. Callback hell is a situation where we have multiple nested callbacks.
2. It makes code difficult to read and maintain.

&Inverson of control: When we pass a function as an argument to another function, we are giving control to the function we are passing to. This is called inversion of control.

*/

/*
~Promises
1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()


*/

/*
~Async Await
Async functions are used to handle promises in a more elegant way. Async functions always return a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an exception, the promise will be rejected.
await keyword is used to wait for the promise to resolve. It can only be used inside an async function. await makes JavaScript wait until the promise returns a result. It has to be noted that it only makes the async function block wait and not the whole program execution.

Example:

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 5000);
    });

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 10000);
    });

    async function handlePromises(){
        cosole.log('Start');

        const res1 = await p1;
        console.log(res1);

        const res2 = await p2;
        console.log(res2);
    }
    handlePromises();

handlePromises() goes to the call stack. When promise 1 is encountered , function is suspended and moved out of the call stack and it awaits till promise 1 is resolved, after promise 1 is resolved handlePromises() goes inside call stack and starts execution from where it left off. When promise 2 is encountered , function is suspended and moved out of the call stack and it awaits till promise 2 is resolved, after promise 2 is resolved handlePromises() goes inside call stack and starts execution from where it left off.


fetch()
fetch returns a promise. If the promise is resolved, it returns a response object. If the promise is rejected, it returns an error object. We have to convert the response object into json format using .json() method. This method also returns a promise. If the promise is resolved, it returns the data in json format. If the promise is rejected, it returns an error object. We use try catch block to handle the error. If there is an error, catch block will be executed. If there is no error, try block will be executed.

*/