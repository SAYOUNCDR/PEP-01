const shoppingCart = [
  { itemName: "Wireless Mouse", itemPrice: 25 },
  { itemName: "Gaming Monitor", itemPrice: 300 },
  { itemName: "USB-C Cable", itemPrice: 15 },
  { itemName: "Mechanical Keyboard", itemPrice: 120 },
  { itemName: "Webcam", itemPrice: 85 },
];

// NOTE: Why spread operator is used here?
// For sort to work it need elements to be in array format and one by one elements are passed using spread operator.
const spread = [...shoppingCart].sort((a, b) => a.itemPrice - b.itemPrice);
console.log(spread);
