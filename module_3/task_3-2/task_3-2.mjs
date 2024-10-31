"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Counting up and down*/
let result = "";

for(let i = 1; i <= 10; i++){
    result += i + " ";
}
printOut(result);

let result2 = "";

for(let i = 10; i >= 1; i--){
    result2 += i + " ";
}
printOut(result2);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Number guessing game*/
const answerNumber = 45;
let guessNumber = 0;
while (answerNumber !== guessNumber){
    guessNumber = Math.ceil(Math.random() * 60);
}
printOut("Guess Number: " + guessNumber.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Guessing Game - Level Up!*/
guessNumber = 0;
let guessCount = 0;
const startTime = Date.now();
while(answerNumber !== guessNumber){
    guessCount++;
    guessNumber = Math.ceil(Math.random() * 1000000);
}
const endTime = Date.now();
const tries = endTime - startTime;
printOut("Total guesses " + guessCount + " tok " + tries.toString() + " ms");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Prime number hunter*/
let primes = [];

for (let i = 2; i < 200; i++) {
    let isPrime = true;

    let j = 2;
    while (j <= Math.sqrt(i)) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
        j++;
    }
    if (isPrime) {
        primes.push(i);
    }
}
printOut("Prime numbers: " + primes);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Nested loops and patterns*/
for (let r = 1; r <= 7; r++) {
    let rowText = "";
    
    for (let k = 1; k <= 9; k++) {
        rowText += "K" + k + "R" + r + " ";
    }
    printOut(rowText.trim());
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let i = 0; i < 5; i++) {
    let highestGrade = 0;
    let highestPercentage = 0;
    let highestLetterGrade = '';

    for (let j = 0; j < 5 - i; j++) {
        let points = Math.floor(Math.random() * 236) + 1;
        let percentage = Math.round((points / 236) * 100);
        let letterGrade = '';

        if (percentage >= 89) letterGrade = 'A';
        else if (percentage >= 77) letterGrade = 'B';
        else if (percentage >= 65) letterGrade = 'C';
        else if (percentage >= 53) letterGrade = 'D';
        else if (percentage >= 41) letterGrade = 'E';
        else letterGrade = 'F';

        if (percentage > highestPercentage) {
            highestGrade = points;
            highestPercentage = percentage;
            highestLetterGrade = letterGrade;
        }
    }
    printOut("Candidate got " + highestGrade + " points, " + highestPercentage + "%, grade " + highestLetterGrade);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Dice Rolling Extravaganza*/
printOut(" Dice Rolling Extravaganza");

const d1 = Math.ceil(Math.random() * 6);
const d2 = Math.ceil(Math.random() * 6);
const d3 = Math.ceil(Math.random() * 6);
const d4 = Math.ceil(Math.random() * 6);
const d5 = Math.ceil(Math.random() * 6);
const d6 = Math.ceil(Math.random() * 6);

let diceThrow = "";
diceThrow += d1.toString() +",";
diceThrow += d2.toString() +",";
diceThrow += d3.toString() +",";
diceThrow += d4.toString() +",";
diceThrow += d5.toString() +",";
diceThrow += d6.toString();

printOut("diceThrow: " + diceThrow);

const count1 = diceThrow.match(/1/g) || ",".length;
const count2 = diceThrow.match(/2/g) || ",".length;
const count3 = diceThrow.match(/3/g) || ",".length;
const count4 = diceThrow.match(/4/g) || ",".length;
const count5 = diceThrow.match(/5/g) || ",".length;
const count6 = diceThrow.match(/6/g) || ",".length;

let diceCount ="";
diceCount += d1.toString() + ",";
diceCount += d2.toString() + ",";
diceCount += d3.toString() + ",";
diceCount += d4.toString() + ",";
diceCount += d5.toString() + ",";
diceCount += d6.toString();

printOut("diceCount: " + diceCount);

const equals1 = (diceCount.match(/1/g)) || ",".length;
const equals6 = (diceCount.match(/6/g)) || ",".length;
printOut("equals1: " + equals1.toString());
printOut("equals6: " + equals6.toString());

if(equals1 === 6){
    printOut("Full straight");
}else if(equals === 1){
    printOut("Yahtzee!");
}

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
