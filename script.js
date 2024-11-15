// Counter variable to hold the current value
let counter = 0;

// Function to update the displayed counter value
function updateDisplay() {
    document.getElementById("counterValue").textContent = counter;
}

// Function to increase the counter
function increase() {
    counter++;
    updateDisplay();
}

// Function to decrease the counter
function decrease() {
    counter--;
    updateDisplay();
}

// Function to reset the counter
function reset() {
    counter = 0;
    updateDisplay();
}
