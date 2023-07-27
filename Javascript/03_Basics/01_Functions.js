//Funtions 
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
// 4. IIFE
// 5. Generator Function
// 6. Async Function
// 7. Callback Function
// 8. Higher Order Function
// 9. Pure Function
// 10. Impure Function
// 11. Recursive Function
// 12. Anonymous Function
// 13. Immediately Invoked Function Expression (IIFE)


function sum(a, b) {   // Function Declaration
    return a + b;      // Function Body
}
console.log(sum(2, 3)); // Function Call

// Function Expression
const sum1 = function (a, b) {   // Function Expression 
    return a + b;      // Function Body
}
console.log(sum1(2, 3)); // Function Call

function calculateCartPrice(val1,val2,...num){   //Rest Operator 
    return num,val1,val2;
}
console.log(calculateCartPrice(1,2,3,4,5,6,7,8,9,10));

const user = {   // Object
    name: 'John',
    price: 999
}
function handleObject(anyobject){  // Object as a parameter
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObject(user); // Object as a argument

const animeCharacter =["Lelouch","Light","Itachi","Edward","L"]; // Array
function handleArray(anyarray){  // Array as a parameter
    console.log(`First Character is ${anyarray[0]} and Last Character is ${anyarray[1]}`);
}
handleArray(animeCharacter); // Array as a argument

