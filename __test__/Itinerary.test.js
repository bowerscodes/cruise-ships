const Itinerary = require ('../src/Itinerary');
const Port = require('./Port.test');

describe('Itinerary', () => {
    it('can be instantiated', function () {
        const itinerary = new Itinerary;
        expect(new Itinerary()).toBeInstanceOf(Itinerary);
    });
    it('has a "ports" property', () => {
        const portsmouth = new Port("Portsmouth");
        const iow = new Port('Isle of Wight');

        const itinerary = new Itinerary([portsmouth, iow]);
        expect(itinerary.ports).toEqual([portsmouth, iow]);
    });
    
});