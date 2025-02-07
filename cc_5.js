// Task 1: Object Properties - Customer Profile
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};

console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

// Task 2: Object Methods - Order Details
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}, Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
};

order.displayOrder();

// Task 3: Array Manipulation - Shopping Cart
let cartItems = ["Laptop", "Headphones", "Keyboard"];

cartItems.push("Mouse"); // Adding a new product
cartItems.pop(); // Removing the last item
cartItems.unshift("Monitor"); // Adding an item at the beginning
cartItems.shift(); // Removing the first item

console.log(`Final Cart Items: ${cartItems}`);

// Task 4: Map Method - Price Adjustments
let prices = [100, 200, 300];
let discountedPrices = prices.map(price => price * 0.9); // Applying 10% discount

console.log(`Discounted Prices: ${discountedPrices}`);

