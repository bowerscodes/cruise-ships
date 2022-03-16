// class Ship {
//     constructor(startingPort) {
//         this.port = startingPort;
//         this.currentPort = port;
//         this.passengers = [];
//     }
//     dock(port) {
//         this.currentPort = port;
//     }
//     setSail() {
//         this.port = false;
//     }

// };

function Ship(startingPort) {
    this.port = startingPort;
    this.currentPort = port;
    this.passengers = [];
}

Ship.prototype.setSail = function() {
    this.port = false;
};

Ship.prototype.dock = function() {
    this.port = port
}

module.exports = Ship;