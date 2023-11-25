# JavaScript Types

JavaScript is a dynamically-typed language, meaning variables are not explicitly declared with a type. The type of a variable is determined dynamically at runtime. There are six primitive data types and one complex data type in JavaScript.

## Primitive Data Types

1. **Number:**
  Represents both integer and floating-point numbers.
   
   ```js
   let num = 42; // integer
   let floatNum = 3.14; // floating-point
   ```

1. **String:**  
Represents a sequence of characters.

   ```js
   let greeting = "Hello, World!";
   ```

1. **Boolean:**
Represents a logical entity, true or false.

   ```js
   let isTrue = true;
   let isFalse = false;
   ```

1. **Null:**  
Represents the absence of a value.

   ```js
   let nullValue = null;
   ```

1. **Undefined:**
Represents a declared variable that has not been assigned a value.

   ```js
   let undefinedValue;
   ```

1. **Symbol:**  
Introduced in ECMAScript 6, represents a unique identifier.

   ```js
   const sym = Symbol('unique');
   ```
   
## Complex Data Type

7. **Object:**
Represents a collection of key-value pairs.

   ```js
   let person = {
     name: 'John',
     age: 30,
     isStudent: false
   };
   ```

## Typeof Operator

The typeof operator is used to determine the type of a variable.

   ```js
   console.log(typeof num); // "number"  
   console.log(typeof greeting); // "string"
   console.log(typeof isTrue); // "boolean"
   console.log(typeof nullValue); // "object" (historical quirk)  
   console.log(typeof undefinedValue); // "undefined"
   console.log(typeof sym); // "symbol"  
   console.log(typeof person); // "object"
   ```

   # JavaScript Variables

Variables are used to store and manage data in JavaScript. They are containers that hold values, and their values can change during the execution of a program.

## Declaring Variables

1. **var (ES5 - Deprecated):**  
   - Declares a variable globally or locally to a function, regardless of block scope.

   ```js
   var age = 25;
   ```

2. **let (ES6):**   
Declares a block-scoped variable, which is limited to the block, statement, or expression where it is defined.

   ```js
   let name = "Alice";
   ```

3. **const (ES6):**  
Declares a block-scoped variable like let, but its value cannot be reassigned.

   ```js
   const PI = 3.14;
   ```

## Variable Naming Conventions

Variables should start with a letter, underscore (_) or dollar sign ($). Subsequent characters can also be digits (0-9).

   ```js
   let userCount = 100;
   let _temperature = 25;
   let $price = 19.99;
   ```

## Variable Scope

**Global Scope:** Variables declared outside of any function or block have a global scope.  

**Local Scope:** Variables declared within a function or block have a local scope.

   ```js
   let globalVar = "I am global";

   function exampleFunction() {
     let localVar = "I am local";
     console.log(globalVar); // Accessible  
   }

   console.log(globalVar); // Accessible
   console.log(localVar); // Error - not accessible
   ```

## Hoisting

JavaScript variables are hoisted, which means they are moved to the top of their containing scope during the compilation phase.

   ```js
   console.log(age); // undefined
   var age = 25;
   ```

## Dynamic Typing  

JavaScript is dynamically-typed, meaning variables can hold values of any type, and their types can change during runtime.

   ```js
   let dynamicVar = 42;
   console.log(dynamicVar); // 42

   dynamicVar = "Now I'm a string"; 
   console.log(dynamicVar); // Now I'm a string
   ```
## Var Let Const

| Keyword | Scope | Can be Reassigned | Can be Redeclared | Hoisting | Example                   |
|---------|-------|-------------------|-------------------|----------|---------------------------|
| `var`   | Function/Global | Yes | Yes | Hoisted | `var age = 25;`           |
| `let`   | Block | Yes | No | Not Hoisted | `let name = "Alice";`   |
| `const` | Block | No | No | Not Hoisted | `const PI = 3.14;`       |

- **Scope:**
  - `var`: Function or globally scoped.
  - `let` and `const`: Block-scoped (limited to the block, statement, or expression where they are defined).

- **Can be Reassigned:**
  - `var`: Yes
  - `let`: Yes
  - `const`: No (the value cannot be reassigned)

- **Can be Redeclared:**
  - `var`: Yes
  - `let`: No
  - `const`: No

- **Hoisting:**
  - `var`: Hoisted (moved to the top of the scope).
  - `let` and `const`: Hoisted, but not initialized (Temporal Dead Zone - accessing them before the declaration results in an error).

# JavaScript Operators

Operators in JavaScript are symbols or keywords that perform operations on variables or values. They are essential for building expressions and manipulating data.

## Arithmetic Operators

Arithmetic operators perform mathematical operations on numeric values.

### Examples:

```js
let addition = 5 + 3; // 8  
let subtraction = 10 - 5; // 5
let multiplication = 2 * 4; // 8
let division = 10 / 2; // 5  
let modulus = 15 % 4; // 3
```

## Assignment Operators

Assignment operators assign values to variables.  

### Examples:

```js
let x = 5;
let y = 10;

x += y; // Equivalent to x = x + y; 
```

## Comparison Operators  

Comparison operators compare values and return a boolean result.  

### Examples:

```js
let isEqual = 5 == "5"; // true (loose equality)
let isStrictEqual = 5 === "5"; // false (strict equality) 
let isNotEqual = 10 != "10"; // false
let isStrictNotEqual = 10 !== "10"; // true
let greaterThan = 8 > 5; // true
let lessThanOrEqual = 5 <= 5; // true
```

## String Operators  

String operators concatenate or combine strings.  

### Example:

```js
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"
```

## Logical Operators

Logical operators perform logical operations on boolean values.  

### Examples:

```js
let logicalAnd = (5 > 3) && (10 < 15); // true
let logicalOr = (5 > 10) || (15 < 20); // true  
let logicalNot = !(5 > 3); // false
```

## Bitwise Operators

Bitwise operators perform operations on binary representations of numeric values.  

### Example:

```js 
let bitwiseAnd = 5 & 3; // 1 (binary 101 & 011 = 001)
```

## Ternary Operator

The ternary operator is a shorthand for the if-else statement.  

### Example:

```js
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor"; 
```

## Type Operators  

Type operators are used to check the type of a variable.  

### Example:

```js
let someVar = "Hello";
console.log(typeof someVar); // "string"
```

# Functions in JavaScript

Functions in JavaScript are reusable blocks of code that perform a specific task. They play a crucial role in structuring and organizing code. Below are key concepts and examples to help understand functions in JavaScript.

## 1. Function Declaration  

Syntax:

```js
function functionName(parameters) {
  // code to be executed 
  return result; // optional
}
```

Example:

```js 
function greet(name) {
  return `Hello, ${name}!`; 
}

console.log(greet("John")); // Output: Hello, John!
```

## 2. Function Expression  

Syntax:  

```js
const functionName = function(parameters) {
  // code to be executed
  return result; // optional  
};
```

Example:

```js
const greet = function(name) {
  return `Hello, ${name}!`; 
};

console.log(greet("Alice")); // Output: Hello, Alice!
```

## 3. Arrow Functions (ES6+)   

Syntax:  

```js  
const functionName = (parameters) => {
  // code to be executed 
  return result; // optional
};
```

Example:  

```js
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Bob")); // Output: Hello, Bob!  
```

## 4. Parameters and Arguments  

Parameters are variables declared in the function definition.  

Arguments are values passed to the function when it is called.  

```js
function addNumbers(a, b) {
  return a + b; 
}

console.log(addNumbers(3, 5)); // Output: 8
```

## 5. Return Statement  

The return statement specifies the value to be returned by the function.  

If no return statement is present, the function returns undefined.  

```js  
function multiply(x, y) {
  return x * y;
}

console.log(multiply(2, 4)); // Output: 8
```

## 6. Default Parameters (ES6+)  

Default parameter values are used when no argument is passed or when an argument is explicitly set to undefined.  

```js  
function power(base, exponent = 2) {
  return Math.pow(base, exponent);
}

console.log(power(3)); // Output: 9 (default exponent is 2)  
```

## 7. Rest Parameters (ES6+)   

The rest parameter allows a function to accept an indefinite number of arguments as an array.  

```js  
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0); 
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

## 8. Scope  

Functions in JavaScript have their own scope.  

Variables declared inside a function are local to that function.  

```js
function exampleScope() {
  let localVar = "I am local"; 
  console.log(localVar); 
}

exampleScope(); // Output: I am local
console.log(localVar); // Error: localVar is not defined
```

## 9. Closures  

A closure is a function that has access to variables from its outer (enclosing) scope.  

```js
function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction;
}

const closure = outerFunction(5);  
console.log(closure(3)); // Output: 8
```

## 10. Statements  

A statement is a complete line of code that performs a specific action. Statements are often terminated with a semicolon (;).  

Examples:  

```js
let x = 5; // Variable declaration statement  
console.log("Hello, World!"); // Function call statement  
if (x > 0) {
  console.log("x is positive."); // Conditional statement
}
```

## 11. Expressions  

An expression is a piece of code that produces a value. Expressions can be as simple as a single variable or as complex as a combination of variables, operators, and function calls.  

Examples:  

```js
let y = 3 + 4; // Addition expression  
let fullName = firstName + " " + lastName; // String concatenation expression
let isAdult = age >= 18; // Comparison expression
```



## 12. IIFE (Immediately Invoked Function Expression)  

An IIFE is a function expression that is executed immediately after it's created.  

Example:  

```js
let sum = (function(a, b) {
  return a + b; 
})(5, 10);

console.log(sum); // Output: 15
```