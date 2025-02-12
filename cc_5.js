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

// Task 5: Filter Method - Product Availability
let inventory = [5, 0, 12, 8, 0];
let availableProducts = inventory.filter(quantity => quantity > 0); // Removing out-of-stock items

console.log(`Available Products: ${availableProducts}`);

// Task 6: Reduce Method - Revenue Calculation
let sales = [500, 300, 200, 400];
let totalRevenue = sales.reduce((acc, sale) => acc + sale, 0); // Summing up total revenue

console.log(`Total Revenue: $${totalRevenue}`);

// Task 7: Find Method - Customer Search
let customers = ["Alice", "Bob", "Charlie", "David"];
let foundCustomer = customers.find(name => name === "Charlie"); // Searching for a specific customer

console.log(`Found Customer: ${foundCustomer}`);

// Task 8: Function Declaration - Tax Calculation
function calculateTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Tax: $${tax}`);
    return tax;
}

calculateTax(1000, 0.07);

// Task 9: Function Expression - Discount Application
let applyDiscount = function(price, discount) {
    let discountedPrice = price - (price * discount);
    console.log(`Discounted Price: $${discountedPrice}`);
    return discountedPrice;
};

applyDiscount(200, 0.15);

// Task 10: Arrow Function - Loyalty Points
let calculatePoints = purchaseAmount => Math.floor(purchaseAmount / 10);

console.log(`Loyalty Points Earned: ${calculatePoints(250)}`);
