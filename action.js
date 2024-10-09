const chatbody = document.querySelector('.chatbody'); 
const messageInputer = document.querySelector('.message-input'); 


// Function to create a message element
const createMessageElement = (Content, className) => {
    const div = document.createElement('div');
    div.className = `message ${className}`;
    div.innerHTML = Content;
    return div;
};

// Handle outgoing user message
const handleOutgoingMessage = (userMessage) => {
    const messageContent = `<div class="message-text"> ${userMessage} </div>`;
    // Create display user message element
    const OutgoingMessageDiv = createMessageElement(messageContent, 'user-message');
    chatbody.appendChild(OutgoingMessageDiv);
};

// Handle enter key press to send message
messageInputer.addEventListener('keydown', (e) => {
    const userMessage = e.target.value.trim();
    if (e.key === 'Enter' && userMessage) {
        handleOutgoingMessage(userMessage);
        e.target.value = ''; // Clear the input field after sending the message
    }
});