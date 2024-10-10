document.addEventListener('DOMContentLoaded', function() {
    const messageInputer = document.querySelector('.message-input');
    const sendMessageButton = document.querySelector('#send-message');
    const chatbody = document.querySelector('.chatbody');
    const API_URL = '';

    // Function to create a message element
    const createMessageElement = (content, ...classNames) => {
        const div = document.createElement('div');
        div.classList.add('message', ...classNames);
        div.innerHTML = content;
        return div;
    };

    const generateBotResponse = () => {

    };

    // Handle outgoing user message
    const handleOutgoingMessage = (userMessage) => {
        const messageContent = `<div class="message-text"> ${userMessage} </div>`;
        // Create display user message element
        const outgoingMessageDiv = createMessageElement(messageContent, 'user-message');
        chatbody.appendChild(outgoingMessageDiv);

        // Simulate bot response after a delay
        setTimeout(() => {
            const botMessageContent = `<svg class="bot-avater" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-360q-50 0-85-35t-35-85q0-50 35-85t85-35v-80q0-33 23.5-56.5T240-760h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-680v80q50 0 85 35t35 85q0 50-35 85t-85 35v160q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200v-160Zm200-80q25 0 42.5-17.5T420-500q0-25-17.5-42.5T360-560q-25 0-42.5 17.5T300-500q0 25 17.5 42.5T360-440Zm240 0q25 0 42.5-17.5T660-500q0-25-17.5-42.5T600-560q-25 0-42.5 17.5T540-500q0 25 17.5 42.5T600-440ZM320-280h320v-80H320v80Z"/>
                </svg>
                <div class="message-text">
                   <div class="thinking-indicator">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                   </div>
                </div>`;
            const incomingMessageDiv = createMessageElement(botMessageContent, 'bot-message', 'thinking');
            chatbody.appendChild(incomingMessageDiv);
            generateBotResponse();
        }, 600);
    };

    // Handle enter key press to send message
    messageInputer.addEventListener('keydown', (e) => {
        const userMessage = e.target.value.trim();
        if (e.key === 'Enter' && userMessage) {
            e.preventDefault(); // Prevent the default action of the Enter key
            handleOutgoingMessage(userMessage);
            e.target.value = ''; // Clear the input field after sending the message
        }
    });

    // Handle send button click to send message
    sendMessageButton.addEventListener('click', (e) => {
        const userMessage = messageInputer.value.trim();
        if (userMessage) {
            handleOutgoingMessage(userMessage);
            messageInputer.value = ''; // Clear the input field after sending the message
        }
    });
});