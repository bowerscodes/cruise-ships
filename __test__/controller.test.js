/**
 * @jest-environment jsdom
 */

const Controller = require('../src/Controller');

describe('Controller', () => {
    it('instantiates an object', () => {
        // const controller = new Controller;

        expect(new Controller()).toBeInstanceOf(Controller);
    })
})