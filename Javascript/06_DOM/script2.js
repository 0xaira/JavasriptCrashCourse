// 4 Pillars of DOM 

// 1. Selection of an element
// 2. Changing HTML
// 3. Changing the style of an element
// 4. Event Listener

let a = document.querySelector("h1");
a.innerHTML = "<em>Hello World</em>";
console.log(a.innerHTML);
a.style.color = "lavender";
a.style.backgroundColor = "black";
a.style.fontSize = "50px";
a.style.border = "2px solid black";
a.style.padding = "10px";
a.style.margin = "10px";
a.style.textAlign = "center";
a.style.fontFamily = "sans-serif";
a.style.fontWeight = "bold";
a.style.borderRadius = "10px";
a.style.boxShadow = "0 0 10px black";
a.style.textShadow = "0 0 10px black";
a.style.width = "50%";
a.style.display = "inline-block";
a.style.verticalAlign = "middle";
a.style.lineHeight = "100px";



a.addEventListener('click', function (){
    a.innerHTML = "<em>Hello India</em>";
    a.style.color = "Green";
    a.style.backgroundColor = "orange";
    a.style.fontSize = "50px";
    a.style.border = "2px solid black";
    a.style.padding = "10px";
    a.style.margin = "10px";
    a.style.textAlign = "center";
    a.style.fontFamily = "sans-serif";
    a.style.fontWeight = "bold";
    a.style.borderRadius = "10px";
    a.style.boxShadow = "0 0 10px black";
    a.style.textShadow = "0 0 10px black";
    a.style.width = "50%";
    a.style.display = "inline-block";
    a.style.verticalAlign = "middle";
    a.style.lineHeight = "100px";
})



let b = document.querySelector("h2");
b.innerHTML = "<em>Hello World</em>";
console.log(b.innerHTML);
b.style.color = "lavender";
b.style.backgroundColor = "black";
b.style.fontSize = "50px";
b.style.border = "2px solid black";
b.style.padding = "10px";
