const penceString = "399p"; // Initialises a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); //Removes the p from the string by choosing only the string that is between location 0 & -1. p is at location  after -1.

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");//This variable makes sure we have at least 3 digits in our string, by adding two 0s in front.
//However I don't understand why is needed since we have already defined our penceString variable with const, therefore the value is 399p, which makes penceStringWithoutTrailingP already a 3 digit string.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); // This variable is extracting the pound part of our string by taking a substring from it's start location 0 till location -2 (where the last two digits of pence are).

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); // This variable takes the last two digits of the string and with padEnd makes sure there are always two digits there. 
//However again I don't understand why is this needed in our exaple here since all variables are const and not let, therefore with stable value and 399 has already 2 digits at the end.

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step


