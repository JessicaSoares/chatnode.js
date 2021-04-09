const express = require("express");
const socket = require('socket.io')
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json())

const server = app.listen("3002", () => {
    console.log("server is runnig in port 3002...");
});


io = socket(server)

io.on('connection',(socket)=> {
    console.log(socket.id)
    socket.on('join_room', (data) => {
        socket.join(data)
        console.log('user joined room:' + data)

    })

    socket.on('disconnect',()=>{
        console.log('user desconected')
    })
})
