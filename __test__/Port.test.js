const Port = require('../src/port')

describe('Port', () => {
    it('instantiates a port', () => {
        expect(new Port('Portsmouth')).toBeInstanceOf(Object);
    });
    it('has a name', () => {
        const port = new Port('Portsmouth');

        expect(port.name).toEqual('Portsmouth');
    });
});