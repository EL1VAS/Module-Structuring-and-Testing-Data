const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//6 in total

// b) How many function calls are there?
//One on line 10 the .log

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//If we want to interpet the movie length of the movie in minutes but as an integer we use this expression. 
//In the variable remainingSeconds we calculate the remainder of 8784/60 (24 seconds remain). 
//Then in the totalMinutes variable we subtract 24 from 8784 and we divide by 60(seconds within a minute) so we get the integer 146. So remaining time is 146m24sec

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//It shows the actual movie length in hours,min and seconds. We could call it totalMovieLenght?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//I think it would, because even if the remainand is 0 of the seconds or minutes it wouldn't affect the outcome
