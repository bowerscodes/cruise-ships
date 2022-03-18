const Port = require('../src/Port');


describe('port', () => {
    describe('with port and ships', () => {
        let port;
        let ship;
        let titanic;
        let maryRose;

        beforeEach(() => {
            port = new Port('Belfast');
            ship = {};
            titanic = {};
            maryRose = {};
        });
        it('can be instantiated', () => {
            const port = new Port('Belfast');
    
            expect(new Port).toBeInstanceOf(Port);
        });
        it('has a name', () => {
            const port = new Port('Belfast');
    
            expect(port.name).toBe('Belfast');
        });
        it('can add ships', () => {
            const port = new Port('Belfast');
            const ship = {};
    
            port.addShip(ship);
    
            expect(port.ships).toContain(ship);
        });
        it('can remove ships', () => {
            const port = new Port('Belfast');
            const titanic = {};
            const maryRose = {};
    
            port.addShip(titanic);
            port.addShip(maryRose);
            port.removeShip(maryRose);
    
            expect(port.ships).toEqual([titanic]);
        });
    });
});