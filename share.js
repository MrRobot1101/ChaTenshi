// const connections = [];

// onconnect = (event)=>{
//     const port = event.ports[0];
//     connections.push(port);
    
//     port.onmessage = (e)=> {
//         connections.forEach(conn =>{
//             if(conn !==port){
//                 conn.postMessage(e.data);
//             }
//         });
//     };
// };

const express = require('express');
const http = require('http')
const socketIo = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('conection',(socket)=>{
    console.log('se conecto un usuario');
    socket.on('chat mensage', (msg) => {
        io.emit('chat mensage', msg);
    });
});
server.listen(3000, () => {
    console.log('listen');
});