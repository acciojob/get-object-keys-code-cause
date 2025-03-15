// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Attach getKeys function to Object prototype
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Testing the function
console.log(getKeys(student)); // Output: ["name"]

// Do not change the code below this line
window.student = student;
window.getKeys = getKeys;
