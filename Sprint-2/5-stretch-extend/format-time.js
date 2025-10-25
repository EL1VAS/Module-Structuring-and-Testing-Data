// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
//My thought is to treat everything as a string except treat hours as a number when i need comparisons in the if statements. Then return everything as a string again.

function formatAs12HourClock(time) {
  const colonIndex = time.indexOf(":");
  const hours = time.slice(0, colonIndex);
  const minutes = time.slice(colonIndex + 1);
  //I will only use numbers for the comparisons
  const hoursNum = Number(hours);

  if (hoursNum === 0) {
    return `12:${minutes} am`;
  } else if (hours === 12) {
    return `${hours}:${minutes} pm`;
  } else if (hoursNum < 12) {
    return `${hours.padStart(2, "0")}:${minutes} am`; //Covering the possibility that hours in the time are given as a single digit ie 8:23. So pad is making this 08 instead of 8
  } else return `${String(hoursNum - 12).padStart(2, "0")}:${minutes} pm`; // Same here pad is used to ensure the two digits outcome
}

const currentOutput = formatAs12HourClock("8:23"); //I tested it with 0:00 and 00:00 also
const targetOutput = "08:23 am";
console.assert(
currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
