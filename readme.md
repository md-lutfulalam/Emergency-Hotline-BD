### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:
getElementById: this returns an object if id is matched or null value if id is not matched.
getElementsByClassName: this returns HTML array like object.
querySelector: returns only the first element in the document that matches.
querySelectorAll: returns all the elements in the document that matches

2. How do you **create and insert a new element into the DOM**?
Answer: Firstly create, document.createElement() method and make a variable to store it, like:let newDiv = document.createElement('div');
then, we can initialize it like this:
newDiv.innerText = 'Hello!';

3. What is **Event Bubbling** and how does it work?
Answer: Event Bubbling means like:clicking a button which triggers an element, then it moves up to the parent element , and goes up to the most parent element and then reaches to the main object.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:Event Delegation is when we add a single event listener to a parent element to manage events for all of the child elements.
It is useful because it improves performance, by reducing the number of event listeners.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
preventDefault():
controls the browser.
stops event's browser action, but continues bubbling up the DOM Tree.
but the stopPropagation():
Controls the event.
stops the event from bubbling up the DOM tree. 