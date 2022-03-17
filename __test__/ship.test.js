const Ship = require('../src/Ship')
const Port = require('../src/Port')
const Itinerary = require('../src/Itinerary')

describe('Constructor', () => {
    it('can be instantiated', () => {
        const port = new Port('Portsmouth');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });
    it('gets added to a port upon being instantiated', () => {
        const portsmouth = new Port('Portsmouth');
        const itinerary = new Itinerary([portsmouth]);
        const ship = new Ship(itinerary);

        expect(portsmouth.ships).toContain(ship);
    });
    it('has a starting port', () => {
        const port = new Port('Portsmouth');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        
        expect(ship.currentPort).toBe(port);
    });
    it('can set sail', () => {
        const portsmouth = new Port('Portsmouth');
        const iow = new Port('Isle of Wight');
        const itinerary = new Itinerary([portsmouth, iow]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(portsmouth.ships).not.toContain(ship);
    });
    it('can dock at a different port', () => {
        const portsmouth = new Port('Portsmouth');
        const iow = new Port('Isle of Wight');
        const itinerary = new Itinerary([portsmouth, iow])
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(iow);
        expect(iow.ships).toContain(ship);
    });
    it("can't sail further than its itinerary", () => {
        const portsmouth = new Port('Portsmouth');
        const iow = new Port('Isle of Wight');
        const itinerary = new Itinerary([portsmouth, iow]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

});