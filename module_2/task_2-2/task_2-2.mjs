"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*Use JavaScript to calculate the following expression, ensuring the result is -34:
2 + 3 * 2 - 4 * 6
Display both the original expression and the modified expression (with parentheses) along with their
results on the HTML page.*/
const NumberExpression = 2;
const NumberExpression2 = (3*(2-4));
const NumberExpression3 = 6;
const Solution = NumberExpression + NumberExpression2 * NumberExpression3;

printOut("2 + (3*(2-4) * 6 = " + Solution);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*Convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters (maximum 2 decimal places in
the answer).*/
const MillInInches = 25.4;
const MillInMetres = 1000;
const Metres = 25.34;
const solution2 = (Metres * MillInMetres) / MillInInches;
const fixedSolution = solution2.toFixed(2);

printOut(fixedSolution);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The
task must be solved with primitives.*/
const SecondsInMinute = 60;
const MinutesInHour = 60;
const HoursInDay = 24;
const HourSolution3 = (3 * HoursInDay + 12);
const MinuteSolution3 = (HourSolution3 * MinutesInHour + 14);
const SecondsSolution3 = (45 / SecondsInMinute);
const Solution3 = MinuteSolution3 + SecondsSolution3;

printOut("AnswerSolution = " + Solution3.toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives.*/
const NumberOfMinutes = 6322.52;
const SecondsInMinutes = 60;
const MinutesInHours = 60;
const HoursInDays = 24; 
let Solution4_Calc = NumberOfMinutes / (60 * 24);
const Solution4_Days = Math.floor(Solution4_Calc);
printOut("Days = " + Solution4_Days);

Solution4_Calc = Solution4_Calc - Solution4_Days;
Solution4_Calc = Solution4_Calc * HoursInDays;
const Solution4_Hours = Math.floor(Solution4_Calc);
printOut("Hours = " + Solution4_Hours);

Solution4_Calc = Solution4_Calc - Solution4_Hours;
Solution4_Calc = Solution4_Calc * MinutesInHours;
const Solution4_Minutes = Math.floor(Solution4_Calc);
printOut("Minutes = " + Solution4_Minutes);

Solution4_Calc = Solution4_Calc - Solution4_Minutes;
Solution4_Calc = Solution4_Calc * SecondsInMinutes;
const Solution4_Seconds = Math.floor(Solution4_Calc);
printOut("Seconds = " + Solution4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".*/
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let AmountUSD = 54;
const AmountNOK = Math.round(AmountUSD * NOK);
printOut(AmountUSD + " dollars is " + AmountNOK + " kroner ");
printOut(AmountNOK + " kroner is " + AmountUSD + " dollar ");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."*/
let solution6Text = "There is much between heaven and earth that we do not understand.";
const count = solution6Text.replace(/\s+/g,"").length;
const charPos = solution6Text.charAt(19);
const sliceStart = 35;
const sliceEnd = sliceStart + 8;
const charBetween = solution6Text.substring(sliceStart, sliceEnd);
const earthIndex = solution6Text.indexOf("earth");

printOut(solution6Text);
printOut("Antall bokstaver i teksten: " + count.toString());
printOut("Karakteren i posisjon 19 er: " + charPos);
printOut("Karakteren mellom 35 og 8 er: " + charBetween);
printOut("Index for earth er: " + earthIndex)
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*Comparison, print the values for the following expressions (evaluate whether the statements are true*/
let s7a = 5 > 3;
let s7b = 7 >= 7;
let s7c = "a" > "b";
let s7d = 1 < "a";
let s7e = "2500" < "abcd";
let s7f = "arne" !== "thomas";
let s7g = (2 === 5) === true;
let s7h = ("abcd" > "bcd") === false;

printOut("5 > 3 is " + s7a.toString());
printOut("7 >= 7 is " + s7b.toString());
printOut("a > b is " + s7c.toString());
printOut("1 < a is " + s7d.toString());
printOut("2500 < abcd is " + s7e.toString());
printOut("arne !== thomas is " + s7f.toString());
printOut("(2 === 5) === true " + s7g.toString());
printOut("(abcd > bcd) === false " + s7h.toString());
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*Convert and print the following expressions*/
let solution8ptA = "254";
let solution8ptB = "57.23";
let solution8ptC = "25 kroner";
printOut("254 = " + Number(solution8ptA));
printOut("57.23 = " + Number(solution8ptB));
printOut("25 kroner = " + parseInt(solution8ptC));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360)*/
let r = (Math.random() * 360) + 1;

printOut("(math.random() * 360) + 1 = " + r.toFixed());
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/*Use modulus (%) to calculate how many weeks and days are in 131 days*/
let totalDays = 131;

const weeks = Math.floor(totalDays / 7);

const days = totalDays % 7;

printOut("Weeks = " + Number(weeks));
printOut("days = " + Number(days));
printOut(newLine);