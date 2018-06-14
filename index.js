var app = require('express')();

var server = require('http').Server(app);

var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('chat.message', function(message) {
        socket.emit("chat.message", "message");
        console.log(message);
    });
})

//107.150.58.98:["server443"]

