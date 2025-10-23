// Predict and explain first...

// Predict the output of the following code:
// =============> I think the below will give an error of predefined as num is already defined with const therefore it can't be redifined with other values.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// Explain why the output is the way it is
// =============> I was wrong it does work but always gives as a result the last digit of 103 which is 3, as 103 is the only value of the num variable.
// Finally, correct the code to fix the problem
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//I removed the definition of the variable out of the function and declare it as a parameter within () in the function.
