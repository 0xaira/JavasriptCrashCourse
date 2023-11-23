# <h1 style="text-align: center;">`CSS NOTES`</h1>


# `CSS Selectors`

CSS selectors allow you to target specific elements on a page to apply styling. Here are some common CSS selectors:

## Universal Selector

The universal selector `*` selects all elements on a page.

```css
* {
  /* Styles applied to all elements */ 
}
```

## Type Selector 

The type selector selects all elements of a specified type.

```css
h1 {
  /* Styles for all h1 elements */
} 
```

## Class Selector

The class selector `.classname` selects all elements with a specific class.

```css
.container {
  /* Styles for elements with class 'container' */
}
```

## ID Selector

The ID selector `#id` selects a unique element with a specified ID.

```css 
#header {
  /* Styles for the element with ID 'header' */ 
}
```

## Descendant Selector

The descendant selector selects all elements that are descendants of a specified element.

```css
article p {
  /* Styles for all paragraphs inside an 'article' element */
}
```

## Child Selector 

The child selector `>` selects all direct children of a specified element.

```css
ul > li {
  /* Styles for direct children 'li' elements of 'ul' */
}
```

## Attribute Selector

The attribute selector selects elements based on their attribute values.

```css
input[type="text"] {
  /* Styles for 'input' elements with 'type' attribute set to 'text' */ 
}
```

There are many more powerful CSS selectors like pseudo-class, pseudo-element and grouping selectors. Let me know if you would like me to expand on any of these!
# _`CSS Colors`_

Colors play a crucial role in web design, providing visual appeal and conveying information. Here are some key concepts related to CSS colors:

## Color Values

### Hexadecimal Notation

Represents colors using six hexadecimal digits (0-9, A-F).

```css
color: #ff0000; /* Red */
```

### RGB Notation

Defines colors using Red, Green, and Blue values (0-255).

```css  
color: rgb(255, 0, 0); /* Red */
```

### RGBA Notation

Adds an alpha channel for transparency (0-1).

```css
color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */ 
```

### Named Colors

Use predefined color names.

```css
color: red;
```

## Background Color

### Background Color Property

```css
background-color: #f0f0f0; 
```

## Opacity

### Opacity Property

```css
opacity: 0.7; /* Range: 0 (transparent) to 1 (opaque) */
```

## HSL Notation 

### HSL (Hue, Saturation, Lightness)

Describes colors based on their hue, saturation, and lightness.

```css
color: hsl(0, 100%, 50%); /* Red */
```

### HSLA Notation

Adds an alpha channel for transparency.

```css
color: hsla(0, 100%, 50%, 0.5); /* Semi-transparent red */
``` 


## Gradients

### Linear Gradient

```css
background: linear-gradient(to right, #ff0000, #0000ff);
```

### Radial Gradient 

```css 
background: radial-gradient(circle, #ff0000, #0000ff);
```

# `CSS Units`

CSS has several units that can be used to specify property values.

## Relative Units

### Percentages (%)

Relative to the parent element.

```css
width: 50%;
```

### Viewport Width (vw)

1% of the viewport's width.

```css  
font-size: 5vw;
```

### Viewport Height (vh)

1% of the viewport's height.

```css
height: 50vh;
```

### Viewport Minimum (vmin)

1% of the smaller of viewport's height and width. 

```css
min-height: 10vmin;
```

### Viewport Maximum (vmax)

1% of the larger of viewport's height and width.

```css
max-width: 20vmax; 
```

### Em (em)

Relative to the font-size of the closest parent.

```css
margin-left: 2em;
```

### Rem (rem) 

Relative to the font-size of the root element (<html>).

```css 
padding-top: 1.5rem;
```

## Absolute Units

### Pixels (px)

It's relative to the screen resolution.

```css
font-size: 16px;
```
# _`CSS Box Model`_

The CSS box model is a fundamental concept that defines how elements are laid out on a web page. It consists of content, padding, border, and margin.

## Content

The actual content of the box, such as text, images, or other media.

```css
.box {
  width: 200px;
  height: 100px;
  background-color: #f0f0f0; 
}
```

## Padding 

The space between the content and the border.

```css
.box {
  padding: 20px; 
}
```

Individual padding values for each side:

```css
.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px; 
  padding-left: 20px;
}
```

## Border

The boundary of the box, surrounding the padding.

```css
.box {
  border: 2px solid #333;
}
```

Individual border values:

```css
.box {
  border-width: 2px;
  border-style: solid;
  border-color: #333;
}
```

## Margin 

The space outside the border, creating space between adjacent boxes.

```css
.box {
  margin: 10px;  
}
```

Individual margin values:

```css
.box {
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 5px;
  margin-left: 10px; 
}
```

## Box Model Shorthand

Shorthand property for setting all aspects of the box model.

```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid #333;
  margin: 10px;
}
```

## Box Sizing 

Determines how the total width and height of an element are calculated.

```css
.box {
  box-sizing: border-box;
}
```

- content-box: Width and height only include the content.

- border-box: Width and height include content, padding, and border.

# _`CSS Text and Fonts`_

Text and fonts are essential aspects of web design, allowing you to control the appearance and readability of content on a webpage.

## Font Properties

### font-family

Specifies the font for an element.

```css
body {
  font-family: 'Helvetica', sans-serif;
}
```

### font-size  

Sets the size of the font.

```css
h1 {
  font-size: 24px; 
}
```

### font-weight

Defines the thickness of the font.

```css
p {
  font-weight: bold;
}
```

### font-style

Sets the style of the font (normal, italic, or oblique).

```css
em {
  font-style: italic;
}
```

### font-variant

Controls the usage of small caps.

```css
span {
  font-variant: small-caps;
}
```

## Text Properties

### color

Sets the text color.

```css
p {
  color: #333;
}
```

### text-align

Specifies the horizontal alignment of text.

```css  
div {
  text-align: center;
}
```

### text-decoration

Defines decoration added to text (underline, overline, line-through).

```css
a {
  text-decoration: underline; 
}
```

### line-height

Sets the height of a line of text.

```css
p {
  line-height: 1.5;
}
```

### letter-spacing  

Controls the space between characters.

```css
h2 {
  letter-spacing: 2px;
}
```

### text-transform

Transforms text to uppercase, lowercase, or capitalize. 

```css
span {
  text-transform: uppercase; 
}
```

### white-space

Defines how white space inside an element is handled.

```css
pre {
  white-space: nowrap;
}
```

### word-spacing

Sets the space between words.

```css
p {
  word-spacing: 4px;  
}
```

### text-shadow

Adds a shadow to text.

```css
h1 {
  text-shadow: 2px 2px 4px #888888;
}
```

### overflow  

Specifies how overflowed content should be handled.

```css
div {
  overflow: hidden;
}
```
# `CSS Display Property`

The display property in CSS controls how an element is rendered in the document flow. It defines the type of box used for an HTML element, influencing its layout and behavior.

## Values

### display: block;

Renders an element as a block-level box. It starts on a new line and takes up the full width available.

```css
div {
  display: block; 
}
```

### display: inline;

Renders an element as an inline box. It does not start on a new line and only takes up as much width as necessary.

```css
span {
  display: inline;
}
```

### display: inline-block; 

Combines features of both block and inline. It starts on a new line but allows other elements to sit next to it.

```css
button {
  display: inline-block;
}
```

### display: none;

Hides the element from the layout entirely. It won't take up any space on the page. 

```css
.hidden {
  display: none;
}
```

### display: flex;

Establishes a flex container. The child elements become flexible boxes, allowing for easier layout.

```css
.container {
  display: flex; 
}
```

### display: grid;

Establishes a grid container. The child elements can be placed into predefined rows and columns.

```css
.container {
  display: grid;
}
```

### display: table;, display: table-row;, display: table-cell;

Mimics table behavior. Useful for creating table-like layouts without using HTML table elements.

```css
.table {
  display: table; 
}

.row {
  display: table-row;
}

.cell {
  display: table-cell; 
}
```

## Visibility Property

### visibility: hidden;

Hides the element but still occupies space in the layout.

```css
.hidden {
  visibility: hidden;
}
```

### visibility: visible;

Makes a hidden element visible again.

```css
.visible {
  visibility: visible; 
}
```
# CSS Position Property

The position property in CSS is used to control the positioning of elements within a document. It works in conjunction with other properties like top, right, bottom, and left to define the final position of an element.

## Values

### position: static;

Default value. Elements are positioned according to the normal flow of the document.

```css
div {
  position: static;
}
```

### position: relative;

Positions an element relative to its normal position in the document flow.

```css
div {
  position: relative;
  top: 10px;
  left: 20px; 
}
```

### position: absolute;

Positions an element relative to its nearest positioned (not static) ancestor or to the containing block.

```css  
div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### position: fixed;

Positions an element relative to the browser window. It stays fixed even when the page is scrolled.

```css
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
}
```

### position: sticky;

Acts like relative within its parent, but becomes fixed when the element reaches a certain scroll position. 

```css
nav {
  position: sticky;
  top: 0; 
  background-color: #f0f0f0;
}
```

## z-index Property

### z-index: auto;

Default value. Elements stack in the order they appear in the document.

```css
div {
  z-index: auto;
}
```

### z-index: 1;

Sets the stacking order. Elements with a higher z-index value will be displayed above elements with lower values.

```css
.popup {
  position: absolute;
  z-index: 1000;
}
```

## float Property (Related to Positioning)

### float: left; or float: right;

Positions an element to the left or right, allowing content to flow around it.

```css
img {
  float: left;
  margin-right: 10px; 
}
```

# `CSS FlexBox`
# `CSS Grid`

# `CSS Background Properties`

Background properties in CSS allow you to control the appearance of an element's background.

## Background Color

### background-color

Sets the background color.

```css
background-color: #f0f0f0;
```

## Background Image

### background-image

Specifies one or more image URLs for the background.

```css
background-image: url('image.jpg');
```

### background-repeat  

Defines how the background image is repeated.

```css
background-repeat: repeat-x;
```

### background-position

Sets the starting position of the background image.

```css
background-position: center top;
```

### background-size

Specifies the size of the background image.

```css
background-size: cover;
```

## Background Shorthand

### background

Combines multiple background properties into a single declaration.

```css
background: #f0f0f0 url('image.jpg') no-repeat center top / cover;
```

## Background Attachment

### background-attachment

Determines if the background image scrolls with the content.

```css
background-attachment: fixed; 
```

## Multiple Backgrounds

### background

Allows multiple background images on an element.

```css
background: url('image1.jpg'), url('image2.jpg');
```

## Gradient Backgrounds 

### Linear Gradient

```css
background: linear-gradient(to right, #ff0000, #0000ff);
```

### Radial Gradient

```css
background: radial-gradient(circle, #ff0000, #0000ff); 
```

# `CSS Media Queries and Responsive Web Design`

Responsive web design ensures that web pages look good on various devices and screen sizes. CSS media queries play a vital role in achieving responsiveness.

## Media Queries

### Syntax

Use `@media` followed by the media type and optional media features.

```css
@media screen and (max-width: 600px) {
  /* Styles for screens with a maximum width of 600px */ 
}
```

### Media Types

- `all`: All devices.
- `screen`: Computer screens.  
- `print`: Printers.
- `speech`: Speech synthesizers.

```css
@media print {
  /* Styles for print */
}
```

### Media Features

- `width`: Width of the viewport.
- `height`: Height of the viewport.
- `orientation`: Orientation of the viewport (landscape or portrait).

```css 
@media (min-width: 768px) and (orientation: landscape) {
  /* Styles for screens wider than 768px in landscape mode */
}
```

## Responsive Design Principles

### Fluid Grids

Use relative units (percentages) for widths to create a flexible layout.

```css
.container {
  width: 80%; 
}
```

### Flexible Images

Make images responsive using the `max-width` property.

```css
img {
  max-width: 100%;
  height: auto;
}
```

### Media Queries for Breakpoints

Set breakpoints with media queries to adjust styles based on device characteristics.

```css
@media screen and (max-width: 768px) {
  /* Styles for screens with a maximum width of 768px */
}
```

### Mobile-First Approach  

Start with styles for mobile devices and use media queries to enhance for larger screens.

```css
body {
  font-size: 16px; 
}

@media screen and (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
```

### Viewport Meta Tag

Set the viewport meta tag to control the viewport's width and scale on mobile devices.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Examples 

### Basic Media Query

```css
@media screen and (max-width: 600px) {
  /* Styles for screens with a maximum width of 600px */
}
```

### Responsive Font Size  

```css
body {
  font-size: 16px;
}

@media screen and (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
```

# `CSS Pseudo-classes and Pseudo-elements`

Pseudo-classes and pseudo-elements in CSS allow you to select and style elements based on their state or position within the document.

## Pseudo-classes

### :hover

Applied when the mouse is over an element.

```css
a:hover {
  color: #ff0000; 
}
```

### :active 

Applied when the element is being activated (clicked).

```css  
button:active {
  background-color: #00ff00;
}
```

### :focus

Applied when an element has focus (e.g., after being clicked or tabbed to).

```css
input:focus {
  border: 2px solid #0000ff;
}
```

### :visited

Applied to visited links.

```css
a:visited {
  color: #800080;
}
```

### :nth-child(n)

Selects the nth child element of its parent.

```css
li:nth-child(odd) {
  background-color: #f4f4f4;
}
```

### :nth-of-type(n)

Selects the nth child element of its type.

```css
p:nth-of-type(2) {
  font-weight: bold; 
}
```

## Pseudo-elements

### ::before

Inserts content before the selected element's actual content.

```css
h2::before {
  content: "Chapter ";
}
```

### ::after

Inserts content after the selected element's actual content.

```css
blockquote::after {
  content: " - Author";
}
```

### ::first-line  

Selects the first line of the element.

```css
p::first-line {
  font-weight: bold;
  color: #333;  
}
```

### ::first-letter

Selects the first letter of the element.

```css
p::first-letter {
  font-size: 150%;
  color: #ff0000;
}
```

### ::selection

Styles the portion of text selected by the user.

```css
::selection {
  background-color: #ffff00;
  color: #333;
}
```
# `CSS 2D and 3D Transforms` 

Transformations in CSS allow you to modify the appearance of elements by changing their size, position, and orientation. 2D and 3D transforms provide different dimensions for creating engaging and dynamic interfaces.

## 2D Transforms

### translate()

Moves an element along the X and Y axes.

```css
div {
  transform: translate(50px, 20px);
}
```

### rotate()  

Rotates an element by a specified angle.

```css  
img {
  transform: rotate(45deg);
}
```

### scale()

Changes the size of an element by scaling it.

```css
p {
  transform: scale(1.5); 
}
```

### skew()

Skews an element along the X and/or Y axes.

```css
div {
  transform: skew(30deg, 0deg);
}
```

### matrix()

Applies a 2D transformation using a 6-value matrix.

```css
div {
  transform: matrix(1, 0.5, -0.5, 1, 0, 0);  
}
```

## 3D Transforms

### translate3d()

Moves an element in 3D space.

```css
div {
  transform: translate3d(50px, 20px, 30px);
}
```

### rotate3d()

Rotates an element in 3D space. 

```css
img {
  transform: rotate3d(1, 1, 0, 45deg); 
}
```

### scale3d()

Scales an element in 3D space.

```css
p {
  transform: scale3d(2, 1, 0.5);
}
```

### perspective 

Specifies the perspective for 3D transforms.

```css
.container {
  perspective: 1000px; 
}

.box {
  transform: rotateY(45deg);
}
```

### perspective-origin

Defines the origin for the perspective property.

```css
.container {
  perspective: 1000px;
  perspective-origin: 50% 50%;
}
```

### transform-style 

Defines how child elements are rendered in 3D space. 

```css
.container {
  transform-style: preserve-3d;
} 
```

## Combining Transforms

You can combine multiple transforms into a single transform property.

```css
div {
  transform: translate(50px, 20px) rotate(45deg) scale(1.5); 
}
```
# `CSS Variables`

CSS variables, also known as custom properties, allow you to define reusable values in your stylesheets. They provide a convenient way to centralize and manage your design tokens.

## Variable Declaration

### Syntax

Define a variable using the `--` prefix.

```css
:root {
  --primary-color: #3498db;
  --font-family: 'Arial', sans-serif; 
}
```

## Using Variables

### Property Values

Use variables as property values.

```css
body {
  background-color: var(--primary-color);
  font-family: var(--font-family);
}
```

### Multiple Declarations  

Utilize variables in multiple declarations.

```css
.header {
  background-color: var(--primary-color);
  color: #fff;
}
```

## Dynamic Updates 

### JavaScript Updates

Modify variable values dynamically using JavaScript.

```js
document.documentElement.style.setProperty('--primary-color', '#ff5733');
```

## Variable Scope

### Global Scope

Declare variables in the `:root` pseudo-class for global scope.

```css
:root {
  --global-font-size: 16px; 
}

body {
  font-size: var(--global-font-size);
}
```

### Local Scope

Define variables within specific selectors for local scope.

```css
.container {
  --local-spacing: 10px;
  margin: var(--local-spacing); 
}
```

## Fallback Values

### Fallbacks  

Provide fallback values for browsers that do not support CSS variables.

```css
body {
  font-family: var(--font-family, 'Arial', sans-serif);
}
```


# `CSS Functions`

CSS functions are powerful tools that enable dynamic and calculated values within stylesheets. They can be applied to various properties to create flexible and responsive designs.

## calc()

### Basic Arithmetic

Perform basic arithmetic operations within property values.

```css
width: calc(50% - 20px);
```

### Mix Units  

Combine different units in calculations.

```css
padding: calc(1em + 10px);
```

## min()

### Minimum Value

Set a property to the minimum value among a list of comma-separated values.

```css
width: min(300px, 50%);
```

## max() 

### Maximum Value

Set a property to the maximum value among a list of comma-separated values.

```css
width: max(400px, 60%);
```

## clamp()

### Range Limit

Define a value within a specific range.

```css
font-size: clamp(16px, 3vw, 24px);
```

## var()

### Variable Reference

Reference CSS variables within property values.

```css
color: var(--primary-color);
```

### Fallback Values

Provide fallback values in case the variable is not defined.

```css
font-family: var(--font-family, 'Arial', sans-serif);
```

## Color Functions

### rgb(), rgba()

Define colors using the RGB color model.

```css
background-color: rgb(255, 0, 0);
```

```css
background-color: rgba(255, 0, 0, 0.5); 
```

### hsl(), hsla()

Define colors using the HSL color model.

```css
color: hsl(120, 100%, 50%);
```

```css
color: hsla(120, 100%, 50%, 0.8);
```

## url()

### Image Reference

Include images using the url() function.

```css 
background-image: url('image.jpg');
```


































