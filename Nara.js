const tombol1 = document.getElementById('tombol1');
const tombol2 = document.getElementById('tombol2');
const tombol3 = document.getElementById('tombol3');
const tombol4 = document.getElementById('tombol4');
const konten1 = document.getElementById('konten1');
const konten2 = document.getElementById('konten2');
const konten3 = document.getElementById('konten3');
const konten4 = document.getElementById('konten4');
tombol1.addEventListener('click', () => {
konten1.style.display = 'block';
konten2.style.display = 'none';
});
tombol2.addEventListener('click', () => {
konten1.style.display = 'none';
konten2.style.display = 'block';
});
tombol3.addEventListener('click', () => {
konten1.style.display = 'none';
konten2.style.display = 'block';
});
tombol4.addEventListener('click', () => {
konten1.style.display = 'none';
konten2.style.display = 'block';
});
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const typingIndicator = document.getElementById('typing-indicator');
async function sendMessage() {
const message = messageInput.value.trim();
if (!message) return;
addMessage(message, 'user');
messageInput.value = '';
typingIndicator.style.display = 'block';
try {
const response = await fetch(`https://darkness.ashlynn.workers.dev/chat/?prompt=${encodeURIComponent(message)}&model=gpt-4o-mini`);
const data = await response.json();
typingIndicator.style.display = 'none';
if (data.successful === 'success' && data.response) {
addMessage(data.response, 'bot');
}
else {
addMessage('An error occurred. Please try again.', 'bot');
}
} 
catch (error) {
console.error(error);
typingIndicator.style.display = 'none';
 addMessage('An error occurred. Please try again.', 'bot');
}
}
function addMessage(text, sender) {
const messageDiv = document.createElement('div');
messageDiv.classList.add('message', `${sender}-message`);
const messageContent = document.createElement('div');
messageContent.classList.add('message-content');
messageContent.textContent = text;
messageDiv.appendChild(messageContent);
chatMessages.appendChild(messageDiv);
chatMessages.scrollTop = chatMessages.scrollHeight;
}
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
if (e.key === 'Enter') sendMessage();
});
addMessage('hallo saya NARA, siap membantu kamu untuk mengerjakan tugas sekolah🥳', 'bot');
addMessage('kamu mau tanya pelajaran apa? aku bisa jawab loh 🥰', 'bot');
addMessage('atau kamu bingung mau move-on tanya ajah caranya ke aku🤭 ', 'bot');
addMessage('tapi inget, aku bukan manusia, tapi siluman Nara 🤣 ', 'bot');
