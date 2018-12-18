const { expect } = require('chai');
const { VendingMachine, Stock } = require('../challenges/challenge3');

describe('Stock', () => {});

describe.only('VendingMachine', () => {
    it('creates a vending machine instance with the relevant properties', () => {
        const testMachine = new VendingMachine(); // <-- instantiating the constructor!
        expect(testMachine.dispenser).to.eql([]);
        expect(testMachine.credit).to.equal(0);
        expect(testMachine.stock).to.eql({
            A : [{},{},{}],
            B : [{},{},{}],
            C : [{},{},{}]
            });
    });
    it('has addStock method that can add stuff to the stock',() => {
        const marsBars = new Stock('marsBar', '50p', 6);
        const testMachine = new VendingMachine();
        testMachine.addStock(marsBars, 'A1');
        expect(testMachine.stock).to.eql(
            { A: [{ name: 'marsBar', price: '50p', quantity: 6 }, {}, {} ],
             B: [ {}, {}, {} ],
            C: [ {}, {}, {} ] 
        });
        testMachine.addStock(marsBars, 'B2');
        expect(testMachine.stock).to.eql(
            { A: [{ name: 'marsBar', price: '50p', quantity: 6 }, {}, {} ],
             B: [ {}, { name: 'marsBar', price: '50p', quantity: 6 }, {} ],
            C: [ {}, {}, {} ] 
        });
  });
});
