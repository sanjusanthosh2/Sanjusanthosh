function f7(basket, prices) {
    let totalCost = 0;

    for (let product in basket) {
        if (prices.hasOwnProperty(product)) {
            totalCost += basket[product] * prices[product];
        }
    }

    return totalCost;
}

// Example usage:
const basket = { "apple": 2, "banana": 3, "orange": 1 };
const prices = { "apple": 1.5, "banana": 0.75, "orange": 1.2 };

console.log(f7(basket, prices)); // Output: 6.45

