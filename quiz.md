1. Why do we need to `import React from "react"` in our files?
Because we rely on the framework of React to be able to write JSX 

2. If I were to console.log(page) in index.js, what would show up?
a JavaScript object with the various properties we defined

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
There's two child elements, and ReactDOM only appends 1 child

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative is a way of programming where we focus on what needs to get done.
Imperative we will instruct how something needs to get done

imagine asking a friend to make a peanutbuttersandwich
-> dec: Can you make me a peanutbuttersandwich.
-> imp: 1) grab bread 2)grab knife 3)ETC....

5. What does it mean for something to be "composable"?
Composable just means that React is very 'modular' and that different pieces or components of the app can be hooked together.





// ANSWERS (Cheatsheet)

1. Why do we need to `import React from "react"` in our files?
React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
We have small pieces that we can put together to make something
larger/greater than the individual pieces.