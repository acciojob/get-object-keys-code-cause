// Create the student object
const student = {
  name: "John",
  getKeys() {
    return Object.keys(this);
  },
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]

// Additional tests
//console.log(getKeys({ name: "Alice", age: 25, city: "New York" })); // Output: ["name", "age", "city"]
//console.log(getKeys({ name: "Bob" })); // Output: ["name"]

// Cypress test integration (if applicable)
if (typeof window !== 'undefined') {
  window.getKeys = getKeys;
}
