// Scope

// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}
test();
// What is Block Scope?
// A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

// Global Scope defination
// A variable declared outside a function, becomes GLOBAL.
// A global variable has global scope: All scripts and functions on a web page can access it.


// function test1() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);
// }

if (true) {
    // Block Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If Scope: ', a, b, c);
}

const company = function () {
    // Block Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}
company(); 


