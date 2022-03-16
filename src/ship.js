function Ship(startingPort) {
    this.startingPort = startingPort;
    this.currentPort = startingPort;
    passengers = [];
};

Ship.prototype.setSail = function () {
    this.startingPort = false;
}

module.exports = Ship;