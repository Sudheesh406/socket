const express = require('express');
const app = express()
const http = require("http").createServer(app)
const io = require('socket.io')(http)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/board.html")
})

app.get('/admin',(req,res)=>{
    res.sendFile(__dirname+"/public/admin.html")
})

io.on('connection',(socket)=>{
    console.log("connection established...");

    socket.on('disconnect',()=>{
        console.log('connection disconnected...');
        
    })
    
})

http.listen(3000,()=>{
    console.log('server running...');
    
})