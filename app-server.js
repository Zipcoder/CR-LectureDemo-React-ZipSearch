var express = require('express');
var app = express();
var _ = require('underscore');

var connections = [];
var users = [];
var logger = [];

var getResult = function(equation){
	return "42";
};

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	socket.once('disconnect', function(){
		var member = _.findWhere(users, { id: this.id });

		if(member){
			users.splice(users.indexOf(member), 1);
			io.sockets.emit('users', users);
			console.log("Left: %s (%s users)", member.name, users.length);
		}

		connections.splice(connections.indexOf(socket), 1);
	    socket.disconnect();
	    console.log("Disconnected: %s sockets remaining", connections.length)
	});

	socket.on('join', function(payload){
		var newMember = {
			id: this.id,
			name: payload.name
		}
		this.emit('joined', newMember);
		this.emit('log', logger);
		users.push(newMember);
		io.sockets.emit('users', users);
		console.log("User Joined: %s", payload.name);
	});

	socket.on('submitting', function(payload){
		var member = _.findWhere(users, { id: this.id });
		console.log("%s submitted equation: %s", member.name, payload);

		var result = getResult(payload);
		this.emit('result', result);

		logger.push({
			name: member.name,
			equation: payload,
			result: result
		});
		io.sockets.emit('log', logger);
		console.log("Logger updated: %s", logger.length);
	});

	connections.push(socket);
	console.log("Connected: %s sockets connected", connections.length);
});

console.log("Calculator server is running at 'http://localhost:3000'");
