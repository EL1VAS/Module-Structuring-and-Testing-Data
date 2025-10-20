// Predict and explain first...

// Why will an error occur when this program runs?
// =============> We have similar case as before, decimalNumber has been redeclared. If we remove the const in row 9 the console.log will show 0.5

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> I was wrong, if we just remove the const it gives an error that decimalNumber is not defined. So I took it out of the function and declare it before the function.
//And I loged the function in the console instead.

const  decimalNumber = 0.5;
function convertToPercentage(decimalNumber){
  const percentage = `${decimalNumber*100}%`;
  return percentage;
}
  console.log(convertToPercentage(decimalNumber));
