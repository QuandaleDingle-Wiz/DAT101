"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeUpTime = 8;
const busTime = 7;
const trainTime = 8;
if(wakeUpTime < busTime){
  printOut("I can take the bus to school.");
} else if (wakeUpTime <= trainTime){
  printOut("i can take the train to school.");
} else{
  printOut("i cannot take the train to school and have to take a car");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let integor = 5;
printOut("variable = " + integor.toString());
if(integor <0){
  printOut("The integor is negative");
}else if(integor ==0){
  printOut("The integor is zero");
}else{
  printOut("The integor is positive");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomInt = (min, max) => {
  min = Math.ceil(1)
  max = Math.floor(8)

  return Math.floor(Math.random() * (max - min +1)) + min;
}

const subFile = randomInt (1,8);
printOut("File size " + subFile.toString())
if(subFile >=4){
  printOut("Thank you");
}else{
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("File size " + subFile.toString())
if(subFile >=6){
  printOut("Image is too large");
}else if(subFile >=4){
  printOut("Thank you");
}else{
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
  "June", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if(monthName.toLowerCase().includes("r")){
  printOut("You must take vitamin D");
}else{
  printOut("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let daysOfMonth = null;
switch (monthName) {
  case "January":
  case "March":
  case "May":
  case "Juli":
  case "August":
  case "October":
  case "December":
    daysOfMonth = 31;
break;
  case "April":
  case "June":
  case "September":
  case "November":
    daysOfMonth = 30;
break;
default:
  "February"
  
  daysOfMonth = 28;
}
printOut("There is " + daysOfMonth + " Days In " + monthName);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let gallaryStatus = null;
switch (monthName) {
  case "March":
  case "May":
    gallaryStatus = "closed";
break;
  case "April":
    gallaryStatus = "temporarily open";
break;
default:
  gallaryStatus = "Open as usual"
}
printOut("The art gallary is " + gallaryStatus + " in " + monthName);

printOut(newLine);