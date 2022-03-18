const Port = require('../src/Port');


describe('port', () => {
    describe('with port and ships', () => {
        let port;

        beforeEach(() => {
            port = new Port('Belfast');
        });

        it('can be instantiated', () => {
            expect(new Port).toBeInstanceOf(Port);
        });
        it('has a name', () => {
            expect(port.name).toBe('Belfast');
        });
        it('can add ships', () => {
            const ship = jest.fn();
            
            port.addShip(ship);
    
            expect(port.ships).toContain(ship);
        });
        it('can remove ships', () => {
            const titanic = jest.fn();
            const maryRose = jest.fn();
            
            port.addShip(titanic);
            port.addShip(maryRose);
            port.removeShip(maryRose);
    
            expect(port.ships).toEqual([titanic]);
        });
    });
});