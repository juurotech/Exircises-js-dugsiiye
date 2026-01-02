// Callback functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Generic operator function
function operate(a, b, callback) {
  return callback(a, b);
}

console.log("Addition:", operate(10, 5, add));         
console.log("Subtraction:", operate(10, 5, subtract)); 
console.log("Multiplication:", operate(10, 5, multiply)); 
console.log("Division:", operate(10, 5, divide));      
