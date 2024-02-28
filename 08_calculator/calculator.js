const add = function(a, b) {
return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(nums) {
	return nums.reduce((sum, num) => sum + num, 0)
  
};

const multiply = function(nums) {
 return nums.reduce((total, num) => total * num) 
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
  if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
