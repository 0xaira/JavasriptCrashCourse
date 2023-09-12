const account_name = "John Doe";
let accountID = 123456;
let accountBalance = 1000.00;
let accountActive = true;
let accountAge = null;
let accountAddress;
console.log(account_name, accountID, accountBalance, accountActive, accountAge, accountAddress);
console.table({ account_name, accountID, accountBalance, accountActive, accountAge, accountAddress });

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

/* var is function scoped while let is block scoped */
