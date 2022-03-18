const Itinerary = require ('../src/Itinerary');
// const Port = require('../Port.test');
const Port = require('../src/Port');

describe('Itinerary', () => {
    it('can be instantiated', function () {
        const itinerary = new Itinerary;
        expect(new Itinerary()).toBeInstanceOf(Itinerary);
    });
    it('has a "ports" property', () => {
        const portsmouth = jest.fn();
        const iow = jest.fn();

        const itinerary = new Itinerary([portsmouth, iow]);
        expect(itinerary.ports).toEqual([portsmouth, iow]);
    });
    
});