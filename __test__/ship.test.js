const Ship = require('../src/ship.js')
const Port = require('../src/port.js')

describe('ship', () => {
    it("can be instantiated", () => {
        const port = new Port('Portsmouth')
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it("has a starting port", () => {
        const port = new Port('Portsmouth');
        const ship = new Ship(port);

        expect(ship.port).toBe(port);
    });
    it("can set sail", () => {
        const port = new Port('Portsmouth');
        const ship = new Ship(port);

        ship.setSail();
        expect(ship.port).toBeFalsy();
    });
    it('can dock at a different port', () => {
        const portsmouth = new Port('Portsmouth');
        const ship = new Ship(portsmouth);

        const iow = new Port('Isle of Wight');
        ship.dock(iow);

        expect(ship.currentPort).toBe(iow);
    });
});

