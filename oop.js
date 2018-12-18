class Stock {
    constructor (name,price,quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    
}

class VendingMachine {
    constructor() {
        this.dispenser = [];
        this.credit = 0;
        this.stock = {
            A : [{},{},{}],
            B : [{},{},{}],
            C : [{},{},{}]
            }
    }
    addStock(stockToAdd, position) {
        // position could be 'B3' or 'A1'
        // access first part of the string for the key in stock
        const key = position[0]; // <-- this will be 'A', 'B' or 'C'

        // second part part of the position tells how far long
        const index = +position[1] - 1; //<-- + before a string number will convert into a number
        this.stock[key][index] = stockToAdd;
        // stock will be object
        // position will be something like 'A1', 'C2' ,...
    }
}