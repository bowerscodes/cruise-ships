function Ship(startingPort) {
    this.startingPort = startingPort;
    this.currentPort = startingPort;
    passengers = [];
};

module.exports = Ship;