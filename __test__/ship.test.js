const Ship = require('../src/Ship')
// const Port = require('../src/Port')
// const Itinerary = require('../src/Itinerary')

describe('Ship constructor', () => {
    describe('with ports and an itnerary', () => {
        let portsmouth;
        let iow;

        beforeEach(() => {
            portsmouth = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Portsmouth',
                ships: []
            };
            iow = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Isle of Wight',
                ships: []
            };

            itinerary = {
                ports: [portsmouth, iow],
            };

            ship = new Ship(itinerary);      
        });
        
        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
        });
        it('gets added to a port upon being instantiated', () => {

            expect(portsmouth.addShip).toHaveBeenCalledWith(ship);
        });
        it('has a starting port', () => {
            expect(ship.currentPort).toBe(portsmouth);
        });
        it('can set sail', () => {
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(portsmouth.removeShip).toHaveBeenCalledWith(ship);
        });
        it('can dock at a different port', () => {
            ship.setSail();
            ship.dock();
    
            expect(ship.currentPort).toBe(iow);
            expect(iow.addShip).toHaveBeenCalledWith(ship);
        });
        it("can't sail further than its itinerary", () => {    
            ship.setSail();
            ship.dock();
    
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
    });    
});