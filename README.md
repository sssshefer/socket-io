# <img src="https://github.com/sssshefer/socket-io/assets/63253440/d6520745-df48-41df-9ae4-e4f12e97169c" alt="socket-io" height="28"> Socket.io Chat Application

This project demonstrates a basic chat application using Socket.io. The application supports public and private chat rooms and includes an admin panel for managing messages.

## Table of Contents
- [About the Project](#about-the-project)
  - [Public Chat](#public-chat)
  - [Admin Panel](#admin-panel)
  - [Built With](#built-with)
- [About WebSockets](#about-websockets)
  - [Key Benefits](#key-benefits-of-websockets)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  
## About the Project

> [!TIP]
> The easiest and clearest way to explore the functionality of the project is to <br/> open several tabs on the same screen
> 
### Public Chat
- **Connect/Disconnect**: Press 'Enter' to connect and 'd' to disconnect from the public chat.
- **Join a Room**: Enter a room name in the "Room" input field and click "Join".
- **Send a Message**: Type your message in the "Message" input field and click "Send".

### Admin Panel
- **Login**: Enter admin credentials (username and password) and click "Login".
- **Send a Message**: Type your message in the "Message" input field and click "Send".

 You can try the admin protected chat with the credentials provided below
  - login: adlog1
  - password: adpas1
  - 
> [!NOTE]  
> The application is built without any persistent data storage. <br/> All data is stored in memory and will be lost when you reload the page or restart the server.
 
### Built With
- [Socket.io](https://socket.io/)
- [Node.js](https://nodejs.org/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## About WebSockets

WebSockets provide a way to open an interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.

> [!IMPORTANT]  
> The purpose of WebSockets isn't to make persistent connections that allow multiple requests. That could be achieved in HTTP through "keep-alive". The purpose of WebSockets is to make bidirectional connexions, in which the server can initiate the interaction with the client, in opposition to HTTP where the client is always the one initiating the interaction and the server only responds to the requests

### Key Benefits of WebSockets
- **Low Latency**: Enables real-time communication with minimal delay.
- **Full-Duplex**: Allows for simultaneous two-way communication.
- **Event-Driven**: Facilitates the handling of messages and events asynchronously.
- 
## Getting Started

### Prerequisites
- Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/sssshefer/socket-io.git
    ```
2. Navigate to the project's server directory:
    ```sh
    cd socket-io/server
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

4. Start the server:
    ```sh
    npm run dev
    ```
5. Navigate to the project's client directory:
    ```sh
    cd ../client
    ```
6. Install the dependencies:
    ```sh
    npm install
    ```

7. Start the application:
    ```sh
    npm run start
    ```
