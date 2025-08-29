# assignment-5
Live Link: https://irtushar.github.io/assignment-5/

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-> getElementById selects one element by its unique ID. getElementsByClassName selects all elements with a specific class and updates automatically if the page changes. querySelector selects the first element matching a CSS selector, and querySelectorAll selects all elements matching a CSS selector but does not update automatically.

2.How do you create and insert a new element into the DOM?
-> The document.createElement() method is used to create a new HTML element node. This method takes a string representing the tag name of the element to be created (e.g., 'div', 'p', 'span').

3.What is Event Bubbling and how does it work?
-> Event bubbling is a browser mechanism where a DOM event, like a click, originates at the target element and "bubbles up" through its ancestor elements in the DOM tree, from the innermost to the outermost, triggering any attached event listeners at each leve

4.What is Event Delegation in JavaScript? Why is it useful?
-> Event delegation is a powerful pattern in JavaScript that improves both the performance and maintainability of your code, especially when dealing with dynamic content or a large number of elements. By leveraging event bubbling, you can reduce the number of event listeners and streamline your code.

5.What is the difference between preventDefault() and stopPropagation() methods?
-> preventDefault() stops the element’s default action. stopPropagation() stops the event from going to parent elements.
