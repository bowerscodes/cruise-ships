const Ship = require('../src/ship')

describe('ship', () => {
    it("can be instantiated", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it("has a starting port", () => {
        const ship = new Ship('Portsmouth');

        expect(ship.startingPort).toBe('Portsmouth');
    });
    it("can set sail", () => {
        const ship = new Ship("Titanic", 'Portsmouth');

        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    })
});
