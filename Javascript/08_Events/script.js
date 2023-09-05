// document.getElementById("photo1").addEventListener("click", function() {
//     alert("My Photo 1");
// });
// document.getElementById("photo2").addEventListener("click", function() {
//     alert("My Photo 2");
// });
// document.getElementById("photo3").addEventListener("click", function() {
//     alert("My Photo 3");
// }
// );

// type, timestamp, defaultPrevented
//target, currentTarget, eventPhase, toElement, srcElement
//clientX, clientY, screenX, screenY, pageX, pageY
//offsetX, offsetY, layerX, layerY
//altKey, ctrlKey, shiftKey, metaKey
//button, buttons, relatedTarget
//bubbles, cancelable, composed, isTrusted
//defaultPrevented, returnValue
//eventPhase, stopPropagation(), stopImmediatePropagation()


// Bubble phase - event goes down to the target element
document.getElementById("images").addEventListener("click", function(event) {
    console.log("Images");
},false);

document.getElementById("photo2").addEventListener("click", function(event) {
    console.log("Photos");
},false);


//Capturing Phase- event goes up to the target element
document.getElementById("images").addEventListener("click", function(event) {
    console.log("Imagesssssssssss");
},true);

document.getElementById("photo2").addEventListener("click", function(event) {
    console.log("Photossssssssssssss");
},true);

// preventDefault()
document.getElementById("google").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link");
});
 
// stopPropagation()
document.getElementById("photo1").addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Photo 1");
});

