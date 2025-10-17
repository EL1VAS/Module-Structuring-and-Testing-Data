const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//Code not working because .slice is a string method and variable is a number. Gives me the below error when run it in node.
TypeError: cardNumber.slice is not a function
    at Object.<anonymous> (C:\Users\orfea\Documents\HYF\Module-Structuring-and-Testing-Data\prep\example-5.js:2:32)
//If we make cardNumber variable a string from the beggining we are in danger that a user might input latters where he should input numbers. SO a good solution is:

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits)
