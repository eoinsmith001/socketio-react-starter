var http = require('http'),
  express = require('express'),
  io = require('socket.io');
  port = process.env.PORT || 8080;
 
var app = express();
var server = http.createServer(app);
app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

server.listen(port, function() {
  console.log('server running on ', port);
});

var ios = io(server);
ios.on('connection', function(socket) {
  console.log('got a connection! ', socket.id);
  socket.on('disconnect', function(socket) {
    console.log('disconnection event');
  });
});

