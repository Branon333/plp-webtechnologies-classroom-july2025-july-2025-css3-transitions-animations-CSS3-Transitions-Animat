// script.js

// Global variable
let box = document.querySelector('.animate-box');

// Function to add a class (demonstrates scope & parameter use)
function addClassToElement(element, className) {
    if (!element || !className) return false; // Guard clause
    element.classList.add(className);
    return true; // Indicates success
}

// Function to remove a class (reusable)
function removeClassFromElement(element, className) {
    if (!element || !className) return false;
    element.classList.remove(className);
    return true;
}

// Function to toggle animation (demo of scope & return)
function toggleAnimation() {
    if (box.classList.contains('slide')) {
        removeClassFromElement(box, 'slide');
        return "Animation stopped!";
    } else {
        addClassToElement(box, 'slide');
        return "Animation started!";
    }
}
// Add event listener to JS button
document.getElementById('jsAnimateBtn').addEventListener('click', () => {
    const result = toggleAnimation(); // Function triggers animation
    console.log(result); // Optional feedback in console
});
