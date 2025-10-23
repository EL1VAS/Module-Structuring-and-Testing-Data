// Predict and explain first...

// =============>I think that instead of console.log(a*b) we should ask for return(a*b). I think we will get an undifined error for a and b (but I am not completely sure because a and b are parameters.)

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> Well my prediction was right partially. There should have been a return (a*b) in the function instead of console.log. 
//What I couldn't understand is that I did receive a result of 320 and then "The result of multiplying 10 and 32 is undefined".
//So, it took the numbers 10 and 32 to define the parameters from out of the function but then because there is no return it showed undefined? I would like to analyze this in class.
//I will try more to play with the code.

// Finally, correct the code to fix the problem
function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
