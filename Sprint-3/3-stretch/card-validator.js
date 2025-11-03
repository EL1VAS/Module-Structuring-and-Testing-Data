//Function to validate that input is 16 digit number
function isSixteenDigitNumber(cardNumber) {
  const cardNumberLength = cardNumber.toString().length; // Get the length of the input cardNumber
    if (cardNumberLength === 16) {
    // Check if the length is exactly 16
    for (let i = 0; i < cardNumberLength; i++) {
      //Check each digit till the length of cardNumber
      const char = cardNumber.toString().charAt(i); // The character at index i
        if (isNaN(char)) {
        //If the character is not a number
        return "Input only numbers"; // Return error message
        } 
        else {
        continue; // Continue checking the next character
        }
    }
    return true; // All characters are digits and length is 16
    } 
    else {
    return "Input 16 digits card number"; // Length is not 16
    }
}

// Function to validate that the card number has at least two different digits
function hasTwoDifferentDigits(cardNumber) {
  const firstDigit = cardNumber.toString().charAt(0); // Get the first digit of the card number
    for (let i = 1; i < cardNumber.toString().length; i++) {
    const digit = cardNumber.toString().charAt(i); // Get the digit at index i
    if (digit !== firstDigit) {
      return true; // At least two different digits found
    }
}
  return false; // All digits are the same
}

// Function to check if the last digit of the card number is even
function lastDigitIsEven(cardNumber) {
  const lastDigit = cardNumber.toString().charAt(15); // Get the last digit of the card number
    if (Number(lastDigit) % 2 === 0) {
    return true; // Last digit is even
    } 
    else {
    return false; // Last digit is odd
    }
}

//Function to calculate the sum of all digits to be > 16
function sumOfDigitsGreaterThan16(cardNumber) {
    let sum = 0;
    for (let i = 0; i < cardNumber.toString().length; i++) {
    const digit = Number(cardNumber.toString().charAt(i)); // Get the digit at index i and convert to number
    sum += digit; // Add the digit to the sum
    }
    if (sum > 16) {
    return true; // Sum of digits is greater than 16
    } 
    else {
    return false; // Sum of digits is not greater than 16
    }
}

// Main function to validate the card number
function cardValidator(cardNumber) {
    if (isSixteenDigitNumber(cardNumber) === true) {
    if (
        hasTwoDifferentDigits(cardNumber) &&
        lastDigitIsEven(cardNumber) &&
        sumOfDigitsGreaterThan16(cardNumber)
    ) {
      return "Valid card number"; // All validations passed
    } else {
      return "Invalid card number"; // One or more validations failed
    }
    } 
    else {
    return isSixteenDigitNumber(cardNumber); // Return the error message from isSixteenDigitNumber function
    }
}

module.exports = cardValidator;
