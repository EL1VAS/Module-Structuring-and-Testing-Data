const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means

//Math.floor rounds the float number to the lowest integer. Math.random() calls a random number from 0 to 1 (excluding 1, so most probably a float except if it is 0). 
//I want to calculate this number (0-0.9999999) with the number of the integer digits inclusive of min and max.
//In this example we start from min=1 so its not so obvious. But if we started from 6 till 8 to claculate the amount of digits we should do 8-6=2  +1 in order to include them all.
//When we round this number (that would be anything from 0 to 99.9999) to the lowest integer we will have an integer between 0 and 99. 
//By adding the minimun value We have now gave equal probabilities for a number to show up between 1 and 100

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
