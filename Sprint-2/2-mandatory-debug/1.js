// Predict and explain first...
//  =============> I think we will have an undefined error because return is empty and under it is a+b without definition. Idk if again it will take the definition from after the function
//logging and return a summary, I will test it.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> So as per the prediction a+b are not defined neither returned. And logging them out of the function gave us an error of undefined.
// Finally, correct the code to fix the problem
function sum(a, b) {
  return(a + b);
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
