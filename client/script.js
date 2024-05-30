import {io} from "socket.io-client";

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    const idPlace = document.getElementById('myID');
    idPlace.textContent = socket.id;
})

socket.on('receive-message', (message) => {
    displayMessage(message);
})

const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    const room = roomInput.value;

    if (message === "") return
    socket.emit('send-message', message, room)

    displayMessage(message);
    messageInput.value = '';
})

const joinRoomButton = document.getElementById('room-button');
const roomInput = document.getElementById('room-input');
joinRoomButton.addEventListener('click', () => {
    const room = roomInput.value;
    socket.emit('join-room', room, message => {
        displayRoom(message)
    });

})

function displayMessage(message) {
    const div = document.createElement('div');
    div.textContent = message;
    document.getElementById('message-container').append(div);
}

function displayRoom(room) {
    const div = document.createElement('div');
    div.textContent = room;
    document.getElementById('room-container').append(div);
}

document.addEventListener('keydown', (e) => {
    if (e.target.matches('input')) return
    if (e.key === 'Enter') socket.connect()
    if (e.key === 'd') socket.disconnect()
})

function displayAdminMessage(message, username ) {
    const div = document.createElement('div');
    div.textContent = username?`${username}: ${message}`: message;
    document.getElementById('admin-container').append(div);
}

const adminLoginButton = document.getElementById('admin-login-button');
const adminLoginInput = document.getElementById('admin-login-input');
const adminPasswordInput = document.getElementById('admin-password-input');

let adminSocket;
adminLoginButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (adminSocket) adminSocket.disconnect()

    adminSocket = io('http://localhost:3000/ad', {
        auth: {
            login: adminLoginInput.value,
            password: adminPasswordInput.value
        }
    });

    adminSocket.on('connect_error', (err) => {
        const loginErrorPlace = document.getElementById('admin-login-error');
        loginErrorPlace.textContent = err.message;
    })

    adminSocket.on('connect', () => {
        displayAdminMessage(adminSocket.id + ' connected')
        const loginErrorPlace = document.getElementById('admin-login-error');
        loginErrorPlace.textContent = ''

        const adminId = document.getElementById('myAdminID');
        adminId.textContent = adminSocket.id;

        adminSocket.on('receive-message', (username, message) => {
            displayAdminMessage( message, username);
        })
        const sendAdminButton = document.getElementById('admin-send-button');
        const adminMessageInput = document.getElementById('admin-message-input');

        sendAdminButton.addEventListener('click', (e) => {
            e.preventDefault();
            const message = adminMessageInput.value;
            console.log(message)
            if (message === "") return
            adminSocket.emit('send-message', message);
            adminMessageInput.value = '';
        })
    })
})

