// Create the student object with getKeys method
const student = {
  name: "John",
  age: 30,
  city: "New York",
  getKeys: function() {
    return Object.keys(this);
  }
};

// Test the function
console.log(student.getKeys()); // Output: ["name", "age", "city"]
