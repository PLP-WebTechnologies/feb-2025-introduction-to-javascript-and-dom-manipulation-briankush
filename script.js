document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeableText = document.getElementById('changeableText');
    
    changeTextBtn.addEventListener('click', function() {
        changeableText.textContent = "Text has been changed !!!";
        changeableText.style.color = "Red";
    });
    
    // 2. Modify CSS styles via JavaScript
    const changeStyleBtn = document.getElementById('change-style-btn');
    const styleBox = document.getElementById('style-box');
    
    changeStyleBtn.addEventListener('click', function() {
        if (styleBox.classList.contains('default-style')) {
            styleBox.classList.remove('default-style');
            styleBox.classList.add('new-style');
        } else {
            styleBox.classList.remove('new-style');
            styleBox.classList.add('default-style');
        }
    });
    
    // 3. Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const toggleContainer = document.getElementById('toggle-container');
    const toggleElement = document.getElementById('toggle-element');
    
    toggleElementBtn.addEventListener('click', function() {
        if (toggleContainer.contains(toggleElement)) {
            toggleContainer.removeChild(toggleElement);
            toggleElementBtn.textContent = "Add Element";
        } else {
            toggleContainer.appendChild(toggleElement);
            toggleElementBtn.textContent = "Remove Element";
        }
    });
});