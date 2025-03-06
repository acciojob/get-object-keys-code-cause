// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]

// Additional tests
console.log(getKeys({ name: "Alice", age: 25, city: "New York" })); // Output: ["name", "age", "city"]
console.log(getKeys({ name: "Bob" })); // Output: ["name"]

// Cypress test integration (if applicable)
if (typeof window !== 'undefined') {
  window.getKeys = getKeys;
}





// // Function to add getKeys method to any object
// function addGetKeys(obj) {
//   obj.getKeys = function() {
//     return Object.keys(this);
//   };
// }

// // Create an object
// const myObj = { name: "John", age: 25 };

// // Add getKeys method to the object
// addGetKeys(myObj);

// // Test it
// console.log(myObj.getKeys()); // Output: ["name", "age"]
