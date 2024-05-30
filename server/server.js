const {instrument} = require('@socket.io/admin-ui')
const {Server} = require("socket.io");

const io = new Server(3000, {
    cors: {
        origin: ['http://localhost:8080', 'https://admin.socket.io'],
        credentials: true
    },

})

io.on('connection', socket => {
    socket.on('send-message', (message, room) => {
        if (room === '') {
            socket.broadcast.emit('receive-message', message)
        } else {
            socket.to(room).emit('receive-message', message)
        }
    })
    socket.on('join-room', (room, cb) => {
        socket.join(room)
        cb(room)
    })
})

const adminIo = io.of('/ad')


adminIo.on('connection', socket => {
    console.log('Connected to admin panel: ', socket.username)
    socket.on('send-message', (message) => {
        adminIo.emit('receive-message', socket.username, message)
    })

})

const adminsData = {adlog1: 'adpas1', adlog2: 'adpas2', adlog3: 'adpas3'}

adminIo.use((socket, next) => {
    if (adminsData[socket.handshake.auth.login]
        &&
        adminsData[socket.handshake.auth.login] === socket.handshake.auth.password) {
        socket.username = socket.handshake.auth.login
        next()
    } else
        next(new Error('not authorized'))
})

instrument(io, {auth: false})

