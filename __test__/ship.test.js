const Ship = require('../src/ship')

describe('constructor', () => {
    it("constructs a new Ship object with a name and starting port", () => {
        expect(new Ship('Titanic', 'Portsmouth')).toBeInstanceOf(Object);
    });
    it("has a starting port", () => {
        const ship = new Ship('Titanic', 'Portsmouth');

        expect(ship.startingPort).toBe('Portsmouth');
    });
    it("can set sail", () => {
        const ship = new Ship("Titanic", 'Portsmouth');

        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    })
});
