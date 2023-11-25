# DOM Manipulation in JavaScript

## Accessing Elements

1. `getElementById()`  
    Retrieves an element by its unique ID.

    ```javascript
    const myElement = document.getElementById('myId');
    ```

2. `getElementsByClassName()`
    Retrieves a collection of elements by their class name.

    ```javascript 
    const elements = document.getElementsByClassName('myClass');
    ```

3. `getElementsByTagName()`
    Retrieves a collection of elements by their tag name.  

    ```javascript
    const paragraphs = document.getElementsByTagName('p');
    ```

4. `querySelector()` and `querySelectorAll()`
    Retrieves the first matching element or a collection of elements using CSS selectors.

    ```javascript
    const element = document.querySelector('#myId');
    const allElements = document.querySelectorAll('.myClass');
    ```

## Manipulating Content

1. `innerHTML`  
    Gets or sets the HTML content inside an element.

    ```javascript
    const myElement = document.getElementById('myId');
    myElement.innerHTML = '<p>New content</p>';
    ```

2. `textContent`
    Gets or sets the text content inside an element.  

    ```javascript
    const myElement = document.getElementById('myId');
    myElement.textContent = 'New text content';
    ```
3. `style` 
    Allows direct manipulation of inline styles.

    ```javascript
    const myElement = document.getElementById('myId');
    myElement.style.color = 'red';
    myElement.style.fontSize = '16px';
    ```
## Modifying Attributes  

1. `getAttribute()` and `setAttribute()`
    Gets or sets the value of an attribute.

    ```javascript
    const myElement = document.getElementById('myId');
    const value = myElement.getAttribute('data-custom');
    myElement.setAttribute('data-custom', 'new value');
    ```

2. `classList`
    Manipulates the classes of an element.

    ```javascript
    const myElement = document.getElementById('myId');
    myElement.classList.add('newClass'); 
    myElement.classList.remove('oldClass');
    ```

## Creating and Appending Elements

1. `createElement()`
    Creates a new element.  

    ```javascript
    const newElement = document.createElement('div');
    ```

2. `appendChild()`
    Appends a child element to a parent element.

    ```javascript
    const parentElement = document.getElementById('parent');
    parentElement.appendChild(newElement);
    ```

## Event Handling  

1. `addEventListener()`
    Listens for a specified event on an element and executes a function.

    ```javascript
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
      alert('Button clicked!'); 
    });
    ```