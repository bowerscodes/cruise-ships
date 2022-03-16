const Ship = require('../src/Ship')

describe('Constructor', () => {
    it('initialises a new object', () => {
        const ship = new Ship();
        expect(new Ship('Portsmouth')).toBeInstanceOf(Ship);
    });
    it('has a starting port', () => {
        const ship = new Ship('Portsmouth');
        expect(ship.startingPort).toEqual('Portsmouth');
    });
    
})