var Player = function() {
	if (!( this instanceof Player)) {
		return new Player();
	}
	this.pointTotal = 0;
};

Player.prototype.addPoints = function() {
	console.log('adding points');
};

Player.prototype.substractPoints = function() {
	console.log('subtracting points');
}