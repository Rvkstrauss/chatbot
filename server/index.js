const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connect', (socket) => {
  
  io.emit('broadcast', '[Server]: Welcome stranger!');
  
  socket.on('message', (msg) => {
    
    const dialog = bot[msg.type];

    // console.log(`message received from user: ${msg.from}`);
    // console.log(`message received content: ${msg.content}`);
    io.emit('message', msg);
  });

});

const port = process.env.PORT || 3001;
app.set('port', port);

http.listen(port, () => {
  console.log('listening on *:3001');
});