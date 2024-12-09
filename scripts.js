// Chat
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');
const sendMessageButton = document.getElementById('send-message');

// adding a message
function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    messageDiv.innerHTML = `<p><strong>${sender}:</strong> ${text}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// sending a message
sendMessageButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
        addMessage('You', messageText);
        messageInput.value = '';
        setTimeout(() => {
            addMessage('Jane', 'Got it! Let me review your request.');
        }, 1000);
    }
});

// "Enter" key
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessageButton.click();
    }
});