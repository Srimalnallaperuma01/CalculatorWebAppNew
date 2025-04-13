const display = document.getElementById("display");

// Append input to display
function appendToDisplay(input) {
    display.value += input;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Perform the calculation
function calculate() {
    try {
        display.value = eval(display.value); // eval is used for simplicity but beware of security risks in complex applications
    } catch (error) {
        display.value = "Error"; // If there's an error in the calculation, show Error
    }
}

// Add event listener for keydown event (handling all key actions)
document.addEventListener("keydown", (event) => {
    // Handle Enter key
    if (event.key === "Enter") {
        calculate(); // Call calculate function when Enter is pressed
    }
    // Handle Backspace, Escape, Delete, and 'C' for clearing display
    else if (event.key === "Backspace" || event.key === "Escape" || event.key === "Delete" || event.key === "c") {
        clearDisplay(); // Clear the display
    }
    // Handle numeric keys and operators
    else if (!isNaN(event.key) || ["+", "-", "*", "/"].includes(event.key)) {
        appendToDisplay(event.key); // Append the key to the display if it's a number or operator
    }
});
