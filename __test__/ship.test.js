const Ship = require('../src/Ship')
const Port = require('../src/Port')

describe('Constructor', () => {
    it('initialises a new object', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
        expect(new Ship()).toBeInstanceOf(Ship);
    });
    it('has a starting port', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
        expect(ship.startingPort).toBe(port);
    });
    it('can set sail', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    });
    it('can dock at a different port', () => {
        const portsmouth = new Port('Portsmouth');
        const ship = new Ship(portsmouth);

        const iow = new Port('Isle of Wight');
        ship.dock(iow);
        expect(ship.currentPort).toBe(iow);
    });
});