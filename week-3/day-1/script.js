// Day 1 — Variables, arrays, objects, functions
// Read each Example, then write YOUR truck's version under the TODOs.
// See the results in the console (right-click the page → Inspect → Console).

// ---------- Step 1: Variables ----------
// Example:
// Create 3 variables using "let" or "const"
const exampleName = "Taco Rocket";   // string (text)
const exampleYears = 3;              // number
const exampleIsOpen = true;          // boolean (true or false)

// Log variables
console.log(exampleName, exampleYears, exampleIsOpen);
console.log(typeof exampleName);     // typeof tells you the type

// TODO: Make 3 variables for YOUR truck: a name, a number, and a true/false.
const truckName = "Tees BBQ Bus";
const yearsInBusiness = 5;
const isOpen = true;
// TODO: console.log them, and log the typeof each one.
console.log(truckName, yearsInBusiness, isOpen);
console.log(typeof truckName);
console.log(typeof yearsInBusiness);
console.log(typeof isOpen);

// ---------- Step 2: An array (a list) ----------
// Example:
const exampleMenu = ["taco", "burrito", "nachos"];
console.log(exampleMenu[0]);         // first item: index 0
console.log(exampleMenu.length);     // how many items

// TODO: Make an array of 3 or more things YOUR truck sells.
const myMenu = ["pulled pork sandwich", "brisket plate", "mac and cheese", "coleslaw"];
// TODO: Log the first item, the last item, and how many items there are.
console.log(myMenu[0]); // first item: index 0
console.log(myMenu[myMenu.length - 1]); // last item:
console.log(myMenu.length); // how many items

// ---------- Step 3: An object (one thing with details) ----------
// Example:
const exampleItem = { name: "taco", price: 4.5, spicy: true };
console.log(exampleItem.name);       // dot notation
console.log(exampleItem["price"]);   // bracket notation

// TODO: Make an object for one of YOUR menu items (name, price, spicy).
const myMenuItem = { name: "pulled pork sandwich", price: 8.99, spicy: false };

// TODO: Log one property with dot notation and one with bracket notation.
console.log(myMenuItem.name); // dot notation
console.log(myMenuItem["price"]); // bracket notation

// ---------- Step 4: A function ----------
// Example:
function addTip(price, tip) {
  return price + tip;
}
console.log(addTip(10, 2));          // 12

// TODO: Write a function orderTotal(price, quantity) that RETURNS price * quantity.
function orderTotal(price, quantity) {
  return price * quantity;
}
// TODO: Before you run it, guess what orderTotal(4.5, 3) gives. Then log it.

console.log(orderTotal(4.5, 3));

// ---------- Extra practice (if you finish early) ----------
// 1. Change your menu item's price AFTER you made the object, then log it again.
// 2. Write isCheap(price): return "cheap!" if price is under 5, otherwise "fancy".
