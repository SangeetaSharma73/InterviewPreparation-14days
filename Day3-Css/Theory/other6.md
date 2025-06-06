5. Explain floats and clearing
   Floats are a positioning property (float: left | right) that allow elements to be taken out of the normal document flow and aligned to the left or right of their container.

When an element is floated, subsequent content wraps around it.

Floats are commonly used for layouts and positioning inline-block-like elements.

Problem: Floated elements are removed from the document flow, so their container might collapse (i.e., have zero height if all children are floated).

Clearing Techniques:

clear property: Used on an element to prevent it from appearing next to a floated element (clear: both).

Clearfix Hack:

.clearfix::after {
content: "";
display: table;
clear: both;
}

6. What is a stacking context?
   A stacking context is an HTML element that contains a group of elements with a common stacking order (i.e., how they overlap each other on the z-axis).

Created by:
z-index on positioned elements (position: relative/absolute/fixed/sticky)
opacity less than 1 (opacity: 0.9)
transform, filter, perspective
will-change
mix-blend-mode
isolation: isolate

Example:

.container {
position: relative;
z-index: 0;
opacity: 0.9; /_ creates a stacking context _/
}

7. Discuss shorthand properties
   Shorthand properties allow multiple related properties to be set with a single declaration.

Examples:

/_ margin: top right bottom left _/
margin: 10px 20px 30px 40px;

/_ background shorthand _/
background: url(bg.jpg) no-repeat center/cover;

Overriding individual values:
You can override a shorthand by setting an individual property after the shorthand:
margin: 10px;
margin-left: 20px; /_ overrides left side only _/

⚠️ Order matters: Individual properties must come after the shorthand to take effect.

8. How does the calc() function operate?
   The calc() function allows you to perform calculations to dynamically set property values.

Syntax:

width: calc(100% - 50px);
padding: calc(1rem + 10px);

Mixing units example:

.container {
width: calc(60% - 2rem);
font-size: calc(1vw + 0.5em);
}
Spaces around operators (+, -, \*, /) are required.
Supports addition, subtraction, multiplication, and division.

9. Explain responsive design
   Responsive design ensures a web layout adapts to different screen sizes.

Media Queries:

@media (min-width: 768px) {
body {
background-color: lightblue;
}

}
Approaches:
Mobile-first (recommended):
Start with base styles for small screens.
Add styles progressively for larger screens using min-width.
Desktop-first:
Start with styles for large screens.
Use max-width to override for smaller screens.

Example:

/_ Mobile-first _/
.button {
font-size: 14px;
}

@media (min-width: 768px) {
.button {
font-size: 18px;
}
} 10. What are web fonts?
Web fonts are fonts that are downloaded by the browser and rendered on the webpage.

Two common methods:

1. @font-face (self-hosted):

@font-face {
font-family: 'MyFont';
src: url('/fonts/myfont.woff2') format('woff2');
}
Greater control
Can be optimized and subset
Responsibility for hosting and performance lies with the developer

2. Google Fonts (hosted CDN):
   html

<link href="https://fonts.googleapis.com/2?family=Roboto&display=swap" rel="stylesheet">
Easy to implement
CDN-optimized with fast load times
Limited control over font subsetting
Performance Considerations:
Use modern formats (woff2)
Limit font weights/styles
Use font-display: swap to avoid blocking text render
Preload fonts for better performance
