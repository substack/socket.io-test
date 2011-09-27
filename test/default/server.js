var express = require('express');
var app = express.createServer();
app.listen(9000);

app.use(express.static(__dirname));

var io = require('socket.io').listen(app);;

io.sockets.on('connection', function (socket) {
    socket.emit('news', 'hello world!');
});
