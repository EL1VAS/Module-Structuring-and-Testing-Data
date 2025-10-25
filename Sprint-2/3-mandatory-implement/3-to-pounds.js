// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) { //I made penceString a parameter rather than a const so I can reuse with the function.
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");
  return `£${pounds}.${pence}`;
} //Kept all the rest variables as const since they can apply in all cases. Used return instead of loging in the console, to have a result in my function

console.log(toPounds("40p")); //Tested my function with different values of panceString
