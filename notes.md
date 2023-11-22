# Javascript Notes

## Functions
A function is a reusable block of code that performs a specific task. It can be defined using the `function` keyword.
### Function Declaration

Function declarations define a named function:

```js
function sum(a, b) {
  return a + b;
}
```

### Function Expression 

Function expressions define an anonymous function:

```js
const sum = function(a, b) {
  return a + b;
};
```

The function can optionally be named:

```js
const sum = function add(a, b) {
  return a + b;
}
```

### Return Statement

The return statement ends function execution.
Functions can return a value using the return statement. If no return statement is present, the function returns undefined by default.

```js
function sum(a, b) {
  return a + b; // return the sum of a and b
}
```

### Arrow Functions

Arrow functions provide a shorthand syntax for writing functions:

```js
const sum = (a, b) => {
  return a + b;
}
```

The braces and return are optional for single statement functions:

```js 
const sum = (a, b) => a + b;
```

### Higher Order Functions

Higher order functions are functions that take other functions as arguments or return functions.

Some common examples are:

#### Callbacks

```js
function callback(n) {
  return n ** 2;
}

function map(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i])); 
  }
  return newArr;
}

const squared = map([1, 2, 3], callback);
```

#### Returning Functions (Closures)

```js
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
add5(3); // 8
```

### IIFE 

IIFE (Immediately Invoked Function Expression) are functions that are immediately invoked after definition:

```js
(function() {
  // do something
})();
```

This constructs an anonymous function and immediately executes it.

### setTimeout and setInterval

`setTimeout` and `setInterval` can be used to delay or repeat function execution:

```js
setTimeout(() => {
  // runs after 2 seconds
}, 2000); 

setInterval(() => {
  // runs every 2 seconds 
}, 2000);
```

### Hoisting

Variable and function declarations are "hoisted" to the top of scope.

Function declarations:

```js
hoisted(); // Works 

function hoisted() {}
```

Variable declarations: 

```js
console.log(a); // undefined
var a = 2;
```

But function expressions and assignments are not hoisted:

```js
notHoisted(); // TypeError

var notHoisted = function() {};
```