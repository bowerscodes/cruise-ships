const Ship = require('../src/Ship')
const Port = require('../src/Port')
const Itinerary = require('../src/Itinerary')

describe('Ship constructor', () => {
    describe('with ports and an itnerary', () => {
        let ship;
        let portsmouth;
        let iow;
        let itinerary;

        beforeEach(() => {
            portsmouth = new Port('Portsmouth');
            iow = new Port('Isle of Wight');
            itinerary = new Itinerary([portsmouth, iow]);
            ship = new Ship(itinerary);      
        });
        it('can be instantiated', () => {
    
            expect(ship).toBeInstanceOf(Object);
        });
        it('gets added to a port upon being instantiated', () => {
    
            expect(portsmouth.ships).toContain(ship);
        });
        it('has a starting port', () => {
            
            expect(ship.currentPort).toBe(portsmouth);
        });
        it('can set sail', () => {
    
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(portsmouth.ships).not.toContain(ship);
        });
        it('can dock at a different port', () => {
    
            ship.setSail();
            ship.dock();
    
            expect(ship.currentPort).toBe(iow);
            expect(iow.ships).toContain(ship);
        });
        it("can't sail further than its itinerary", () => {
    
            ship.setSail();
            ship.dock();
    
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
    });    
});