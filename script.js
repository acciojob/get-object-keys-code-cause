// Function to add getKeys method to any object
function addGetKeys(obj) {
  obj.getKeys = function() {
    return Object.keys(this);
  };
}

// Create an object
const myObj = { name: "John", age: 25 };

// Add getKeys method to the object
addGetKeys(myObj);

// Test it
console.log(myObj.getKeys()); // Output: ["name", "age"]
