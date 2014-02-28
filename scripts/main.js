require.config({
	baseUrl: 'scripts/lib',
	shim: {
		'socketio': {
			exports: 'io'
		}
	},
	paths: {
		app: '../app',
		jquery: 'jquery-1.11.0.min',
		socketio: '../../socket.io/socket.io'
	}
});




define([
	'jquery',
	'socketio',
	'app/Game',
	'app/Player'
], function($, io, Game, Player) {

	var socket = io.connect('http://localhost');
	socket.on('foo', function(data) {
		console.log(data);
		socket.emit('bar', { baz: 'buzz' });
	});


});