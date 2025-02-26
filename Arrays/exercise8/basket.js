class Basket {
    constructor() {
        this.items = {}; // Store products and their quantities
    }

    addItem(product, qty) {
        if (!this.items[product]) {
            this.items[product] = 0;
        }
        this.items[product] += qty; // Add quantity
    }

    getCost(prices) {
        let total = 0;
        for (let product in this.items) {
            if (prices[product]) {
                total += this.items[product] * prices[product]; // Multiply qty with price
            }
        }
        return total;
    }
}

// Example usage:
const myBasket = new Basket();
myBasket.addItem("apple", 2);
myBasket.addItem("banana", 3);
myBasket.addItem("orange", 1);

const prices = { "apple": 1.5, "banana": 0.75, "orange": 1.2 };

console.log(myBasket.getCost(prices)); // Output: 6.45
