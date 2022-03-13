const Port = require('../src/ship')

describe('constructor', () => {
    it("constructs a new starting port object", () => {
        expect(new Port('Portsmouth')).toBeInstanceOf(Object);
    });
});
