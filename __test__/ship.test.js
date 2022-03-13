const Ship = require('../src/ship')

describe('constructor', () => {
    it("constructs a new Ship object with a name and starting port", () => {
        expect(new Ship('Titanic', 'Portsmouth')).toBeInstanceOf(Object);
    });
});
