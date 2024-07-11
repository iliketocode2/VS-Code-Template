/*
JavaScript File
---------------
This file adds interactivity and dynamic behavior to web pages. It allows you to 
respond to user actions, communicate with servers, and much more. JavaScript runs in the browser.

Key concepts:
- Variables: Store and manipulate data
- Functions: Reusable blocks of code that perform specific tasks
- Events: Respond to user actions (e.g., clicks, key presses)
*/

document.getElementById('helloButton').addEventListener('click', function() {
    alert('Hello, World!');
});

//a function to scroll the terminal down when you print a lot of lines
window.scrollTerminalToBottom = function() {
    console.log("Scrolling the terminal!");
    // Wait for a short time to ensure PyScript has initialized
    setTimeout(function() {
        const terminal = document.getElementById('pyscript-console') || document.querySelector('.py-terminal');
        
        if (terminal) {
            console.log("Terminal found");
            terminal.scrollTop = terminal.scrollHeight;
        } else {
            console.log("Terminal not found");
        }
    }, 100); // Wait for 100ms
};