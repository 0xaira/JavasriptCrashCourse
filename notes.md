# JavaScript Concepts

## Prototype Inheritance

**Definition:** In JavaScript, inheritance is supported by using the prototype object. Every object in JavaScript has a prototype object associated with it. The prototype object of an object is the object from which it inherits properties.

**Example:**

```javascript
let human = {
    mortal: true,
    talk: true,
    walk: true
}
let cyborg = {
    fly: true
}
cyborg.__proto__ = human; // cyborg inherits from human
console.log(cyborg.mortal); // true
console.log(cyborg.fly); // true