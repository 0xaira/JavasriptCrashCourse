# JavaScript Scopes, Execution, Lexical Scoping, and Hoisting

## Scopes  

1. **Global Scope:**
    - Variables declared outside of functions are in the global scope.
    - Accessible from anywhere in the program.

    ```js
    var globalVar = "I am global";

    function exampleFunction() {
        console.log(globalVar); // Accessible here  
    }
    ```

2. **Function Scope:**

    - Variables declared inside a function are in the function scope.
    - Accessible only within the function.

    ```js
    function exampleFunction() {
        var functionVar = "I am local";
        console.log(functionVar); // Accessible here
    }
    ```

3. **Block Scope:**

    - Variables declared inside a block are in the block scope.
    - Accessible only within the block.

    ```js 
    if (true) {
        var blockVar = "I am in the block";
        console.log(blockVar); // Accessible here
    }
    ```

    > Note: `var` inside a function has function scope, `var` inside a block has global scope.


## Formal Declarations

- Whenever a variable is declared using `let`, `var`, or `const`, it is considered a formal declaration.

    ```js
    var formalVar = "I am formally declared"; // Formal declaration

    let anotherVar = "I am also formally declared"; // Formal declaration
    ```


## How JavaScript Executes Code

### Parsing Phase  

- Javascript executes code in two phases: Parsing Phase and Execution Phase.  

- In the Parsing Phase:

    - The engine parses the code line by line, assigns scope to variables and functions.
    - Checks for syntax errors. 
    - Formal declarations for variables and functions are identified.
    - Variables without formal declaration are assigned global scope.

    ```js
    console.log(undeclaredVar); // No formal declaration, assigned global scope
    ```

### Execution Phase

- In the Execution Phase:

    - The engine executes the code line by line.
    - Memory is allocated to variables and functions. 
    - Values are assigned to variables.
    - Functions are executed.

    ```js
    var x = 5; // Memory allocation
    var y = x + 10; // Execution
    ```

## Autoglobals  

- If a variable is not declared using `let`, `var`, or `const`, it becomes an autoglobal.  

- Autoglobals are assigned global scope.

- Using autoglobals is considered bad practice due to debugging difficulties.

    ```js
    autoglobalVar = "I am autoglobal"; // Autoglobal (bad practice)
    ```

## Undefined vs Undeclared Variables  

### Undefined Variables:

- Declared with `let`, `var`, or `const` but not assigned a value.  
- Result in undefined variables.

    ```js
    var undefinedVar;
    console.log(undefinedVar); // Undefined variable
    ```

### Undeclared Variables:  

- Not declared using `let`, `var`, or `const`.
- Result in undeclared variables.  

    ```js
    console.log(undeclaredVar); // Undeclared variable
    ```

## Lexical Scoping  

- Lexical scoping describes how the scope of variables is determined by the code's physical structure.

    ```js 
    function outerFunction() {
        var outerVar = "I am in the outer function";  

        function innerFunction() {
            console.log(outerVar); // Accessing outerVar from the outer scope
        }

        innerFunction();
    }

    outerFunction();
    ```

## Hoisting  

- Hoisting is the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.

    ```js
    console.log(hoistedVar); // Undefined (hoisted, but not initialized)  

    var hoistedVar = "I am hoisted"; 

    // Function declaration is also hoisted
    hoistedFunction(); // Executes without error

    function hoistedFunction() {
        console.log("Function is hoisted");
    }
    ```