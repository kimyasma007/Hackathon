document.getElementById('textForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the user input text
    const userText = document.getElementById('userText').value;
    
    // Display the text in the paragraph element
    const displayText = document.getElementById('displayText');
    displayText.textContent = userText;
    
    // Show the display text area
    displayText.style.display = 'block';
    
    // Clear the input area
    document.getElementById('userText').value = '';
});
