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
/*Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres (maximum 2 decimal places in
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
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*Create a variable that contains the following text:
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
printOut("Karakteren mellom 35 og 8 er: ")

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);