//**********************DATES*************************
// Date object is used to work with dates and times.
// Date objects are created with new Date().
// There are four ways of instantiating a date:
// new Date() // current date and time
// new Date(milliseconds) //milliseconds since 1970/01/01
// new Date(dateString)
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getTime());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getUTCFullYear());

let myDate2 = new Date(2023,3,23);
console.log(myDate2);
console.log(myDate2.toDateString());

let myDate3 = new Date("2023-3-23");
console.log(myDate3);
console.log(myDate3.toDateString());

let myDate4 = new Date(2023,3,23,12,30,30,30);
console.log(myDate4);
console.log(myDate4.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

