const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicDirectoryPath = path.join(__dirname , '../public')
const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicDirectoryPath))

io.on('connection' , () =>{
    console.log('WebSocket connection')
})


server.listen(port , () =>{
    console.log('Server is up on port ' + port)
})