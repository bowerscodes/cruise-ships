const Port = require('../src/Port');


describe('port', () => {
    it('can be instantiated', () => {
        const port = new Port('Belfast');

        expect(new Port).toBeInstanceOf(Port);
    });
    it('has a name', () => {
        const port = new Port('Belfast');

        expect(port.name).toBe('Belfast');
    })
})

module.exports = Port;