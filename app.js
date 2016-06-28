var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var tunneler = require('./game');

var game = new tunneler.Game();

app.use('/tunneler', express.static(__dirname + '/client'));

http.listen(8080, function() {
  console.log('listening on http://localhost:8080/tunneler');
});

io.on('connection', function(socket) {
  var playerView = game.addPlayer();

  socket.emit('player.init', playerView);

  socket.on('disconnect', function() {
    console.log('disconnected');
  });
});
