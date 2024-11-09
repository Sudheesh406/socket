// const express = require('express');
// const app = express()
// const http = require("http").createServer(app)
// const io = require('socket.io')(http)

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/public/board.html')
// })

// app.get('/admin',(req,res)=>{
//     res.sendFile(__dirname+'/public/admin.html')
// })

// io.on("connection",(socket)=>{
//     console.log("new connection established...");

//     socket.on("disconnect",()=>{
//         console.log("disconnected...");
         
//     })
//     socket.on("message",(msg)=>{
//         io.emit("board_content",msg)
//     })
//     socket.on("board_message", (msg) => {
//         io.emit("admin_content", msg);  // Sends the message to the admin
//     });
    // const txt ;
// })

// http.listen(3000,(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("server running successfully...");
        
//     }
// })