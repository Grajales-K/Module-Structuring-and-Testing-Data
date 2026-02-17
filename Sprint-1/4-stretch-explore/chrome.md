Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

    To invoke an alert that lives in the engine v8; we need to 
    run `alert("Hi there!")`


What effect does calling the `alert` function have?

    In short: alert() interrupts the page to show a message and waits for the user to acknowledge it.

    📢 The message you pass to alert() is displayed to the user.

    ⏸️ JavaScript execution pauses until the user clicks OK.

    🚫 The user can’t interact with the page while the alert is open (it blocks the UI).



Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.


    let myName = prompt("What is your name");
    alert("hi " + myName);

    The prompt function displays a modal dialog that captures user input. The value entered is stored in myName, and alert then displays a greeting that includes that value input captured by the variable myName.


What effect does calling the `prompt` function have?
What is the return value of `prompt`?

    Calling the prompt() function displays a modal pop-up dialog that:

    * Shows a message to the user

    * Includes a text input field

    * Has OK and Cancel      buttons

    * Blocks interaction with the page until the user responds

    If the user types something and clicks OK: It returns a String containing their text.

If the user clicks OK without typing: It returns an empty string ("").

If the user clicks Cancel or hits Esc: It returns null.




# --- Browser Console Simulation ---

> alert("hi " + myName);

< undefined

> let myName = prompt("What is your name")

< undefined

> console.log(myName)

< null          // User clicked Cancel

> let myName = prompt("What is your name")
> console.log(myName)

< "Kyle"          // User typed a name

> let myName = prompt("What is your name")
> console.log(myName)

< ""            // User clicked OK without typing

> console.log(typeof(myName))

< "string"

> console.log("Longitud:", myName.length);

< Longitud: 0





