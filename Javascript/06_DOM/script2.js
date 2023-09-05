//What is DOM?
// Document Object Model
// It is a tree like structure that represents the HTML document
// It is used to connect webpages to scripts like Javascript
// It is used to manipulate the HTML elements with Javascript


// 4 Pillars of DOM 

// 1. Selection of an element
// 2. Changing HTML
// 3. Changing the style of an element
// 4. Event Listener

document.querySelector('h1');  // Selects the first h1 element
document.querySelector('h1').innerHTML = 'New Title'; // Changes the HTML of the first h1 element
document.querySelector('h1').style.color = 'blue'; // Changes the style of the first h1 element
document.querySelector('h1').style.fontSize = '5rem';  
document.querySelector('h1').style.backgroundColor = 'yellow'; 

// Selecting multiple elements
document.querySelectorAll('h1'); // Selects all the h1 elements
document.querySelectorAll('h1')[0].style.color = 'blue'; // Changes the style of the first h1 element

//Event Listener
document.querySelector('h1').addEventListener('click', function(){
    alert('I was clicked');
});





