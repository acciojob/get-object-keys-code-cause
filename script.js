// //your JS code here. If required.
// const student ={
// 	name: "Ashish",
// 	age: 18
// }

// function getKeys(obj){
// 	return Object.keys(obj);
// }

// console.log(getKeys(student));







// Define function first
function getKeys(obj) {
  return Object.keys(obj);
}

// Create student object with only "name" property
const student = {
  name: "John"
};

// Test the function
console.log(getKeys(student)); // Expected output: ["name"]
