const 12HourClockTime = "20:53";
const 24hourClockTime = "08:53";

console.log("12-hour clock time:", 12HourClockTime);
//We get the below error:
const 12HourClockTime = "20:53";
      ^^

SyntaxError: Invalid or unexpected token
//Because we can't start a name of a variable with a number (it applies in both variables above)
//So a suggestion could be:
const twelveHourClockTime = "20:53";
const twentyFourHourClockTime = "08:53";
