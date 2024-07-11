"""
Python File
-----------
Python is often used for back-end web development, data processing, and automation.

Key concepts:
- Variables and data types: Store and manipulate different kinds of data
- Functions: Define reusable blocks of code
- Control structures: Manage the flow of the program (if statements, loops)
- Modules and libraries: Extend Python's capabilities for various tasks
"""

from pyscript import Element
from js import window

print('This is your output console. Any python print statements will appear here!')

new_content = 1

#This function will change the content of the <h1 id="changeContent">0</h1> tag
def a_cool_function(event):
    global new_content

    print('Changing the number to:', new_content)
    Element('changeContent').write(str(new_content))
    new_content += 1
    window.setTimeout(window.scrollTerminalToBottom, 0)

Element('pythonButton').element.onclick = a_cool_function
