document.getElementById('textForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the user input text
    document.getElementById('userText').addEventListener('input', function(event) {
        console.log('Text input:', event.target.value);
    });
    // Display the text in the output container
    const displayText = document.getElementById('displayText');
    displayText.textContent = userText;

    // Show the display text area
    const outputContainer = document.querySelector('.output-container');
    outputContainer.style.display = 'block';

    // Clear the input area
    document.getElementById('userText').value = '';
});
