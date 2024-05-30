import {io} from "socket.io-client";

const joinRoomButton = document.getElementById('room-button');
const messageInput = document.getElementById('message-input');
const roomInput = document.getElementById('room-input');
const form = document.getElementById('form');

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    displayMessage('Connected to server. You ID is ' + socket.id);
})

socket.on('receive-message', (message) => {
    displayMessage(message);
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    const room = roomInput.value;

    if (message === "") return
    socket.emit('send-message', message, room)

    displayMessage(message);
    messageInput.value = '';
})

joinRoomButton.addEventListener('click', () => {
    const room = roomInput.value;
})

function displayMessage(message) {
    const div = document.createElement('div');
    div.textContent = message;
    document.getElementById('message-container').append(div);
}