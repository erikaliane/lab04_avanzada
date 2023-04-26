const express = require ('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)
var path = require('path');



io.on('connection', (socket) => {
    // Procedimiento 4:
   socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})

app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/cliente/index.html`)
})

var publicPath = path.resolve(__dirname, 'cliente');

//path.join(__dirname, 'public')también puede ser una opción

// Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));

server.listen(3000,() => {
    console.log('Servidor corriendo en http://localhost:3000')
})