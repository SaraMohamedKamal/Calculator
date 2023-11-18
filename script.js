// The display variable is assigned the value of the #display element 
//in the document. This element is the calculator's display.
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

//The new function checks the id property of the item element to determine what action to take.
//If the id property is clear, the innerText property of the display element is set to an empty string. 
//This clears the calculator's display.

//If the innerText property of the display element is empty and the id property is equal, 



//The forEach() method is then called on the buttons variable. 
//This method calls the provided callback function for each element
// in the buttons array.

//The callback function takes one parameter, item. 
//This parameter represents the current element in the buttons array.

buttons.forEach((item) => {
    //The callback function sets the onclick property of the item element to a new function.
    // This new function is responsible for handling button clicks.
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
            //If the id property is backspace, the innerText property of the display element is shortened by one character.
            // This removes the last character from the calculator's display.
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1)
                //If the innerText property of the display element is not empty and the id property is equal,
                // the innerText property of the display element is evaluated as JavaScript code.
                // The result of the evaluation is then displayed in the calculator's display.
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText)
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!'
                //the text "Empty!" is displayed in the calculator's display for two seconds. After two seconds, the calculator's display is cleared.
            setTimeout(() => (display.innerText = ''), 2000)
                //If none of the above conditions are met, the id property of the item element is appended
                // to the innerText property of the display element.
                // This adds the character represented by the id property to the calculator's display.
        } else {
            display.innerText += item.id
        }
    }
})

//The themeToggleBtn variable is assigned the value of the .theme-toggler element in the document. This element is the theme toggle button.

//The calculator variable is assigned the value of the .calculator element in the document. This element is the calculator itself.

//The toggleIcon variable is assigned the value of the .toggle-icon element in the document. This element is the icon that is displayed on the theme toggle button.

//The isDark variable is assigned the value true. This variable is used to track the current theme of the calculator.

//The onclick property of the themeToggleBtn element is set to a new function. 
//This new function is responsible for toggling the theme of the calculator.





const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggle-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
        //The new function calls the classList.toggle() method on the calculator element. 
        //This method adds or removes the dark class from the calculator element. The dark class is used to style the calculator in dark mode.
        calculator.classList.toggle('dark');
        //The new function also calls the classList.toggle() method on the themeToggleBtn element.
        // This method adds or removes the active class from the themeToggleBtn element. The active class is used to style the theme toggle button.
        themeToggleBtn.classList.toggle('active');
        //The new function then assigns the opposite value to the isDark variable.
        isDark = !isDark;
    }
    //This code creates a simple calculator that can be used to perform basic arithmetic operations. 
    //The calculator also has a theme toggle button that can be used to switch between light and dark mode.