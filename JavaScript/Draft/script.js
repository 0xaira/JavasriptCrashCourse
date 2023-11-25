//Dom Manipulation

// var head = document.getElementById("heading");
// console.log(head);
// head.style.color = "red";


//Differnece between innerText and innerContent

//innerText will not show the hidden text
//textContent will show the hidden text

// var head = document.getElementById("heading");
// console.log(head.innerText);
// console.log(head.textContent);

//innerHTML will show the html tags also and innerText will not show the html tags only text will be shown.

//querySelector

// var head = document.querySelector("#heading");
// console.log(head);

// var head = document.querySelector(".heading");
// console.log(head);

// var head = document.querySelector("h1");
// console.log(head);

// NodeList and HTMLCollection
// NodeList is a list of nodes and HTMLCollection is a list of elements
//queryselectorAll will return a NodeList and getElementsByClassName will return a HTMLCollection
//forEach method will work on NodeList but not on HTMLCollection

//Convert HTMLCollection to Array

var head = document.getElementsByClassName("heading");
console.log(head);
var arr = Array.from(head);
console.log(arr);

var head = document.querySelectorAll(".heading");
console.log(head);
head.forEach(function (el) {
    console.log(el);
});


