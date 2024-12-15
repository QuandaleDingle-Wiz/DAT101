"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printNorwegianDate() {

    const today = new Date();

    const norwegianDate = today.toLocaleDateString("no-NO", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    printOut(norwegianDate);
}
printNorwegianDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printNorwegianDate() {

    const today = new Date();

    const norwegianDate = today.toLocaleDateString("no-NO", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return norwegianDate;
}

function calculateReleaseDate() {
    const releaseDate = new Date(2025, 5, 14);
    const today = new Date();
    const msInDay = 1000 * 60 * 60 * 24;

    const daysLeft = Math.ceil((releaseDate - today) / msInDay);
    return daysLeft;
}

function countDown() {
    const today = printNorwegianDate();
    const daysLeft = calculateReleaseDate();

    printOut("It is " + daysLeft + " Days until the release of 2XKO!");

}

countDown();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateCircle(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut("Diameter: " + diameter);
    printOut("Circumference: " + circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));
}
calculateCircle(4);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateRectangle(rectangle) {
    const { width, height } = rectangle;
    const circumference = 2 * (width + height);
    const area = width * height;

    printOut("Rectangle width: " + width + ", Height: " + height);
    printOut(" Circumference is " + circumference.toFixed(2));
    printOut(" Area is " + area.toFixed(2));
}
calculateRectangle({ width: 5, height: 5 });

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(value, type) {
    let celsius, fahrenheit, kelvin;

    if (type === "C") {
        celsius = value;
        fahrenheit = Math.round((value * 9 / 5) + 32);
        kelvin = Math.round(value + 273.15);
    } else if (type === "F") {
        celsius = Math.round((value - 32) * 5 / 9);
        fahrenheit = value;
        kelvin = Math.round((value - 32) * 5 / 9 + 273.15);
    } else if (type === "K") {
        celsius = Math.round(value - 273.15);
        fahrenheit = Math.round((value - 273.15) * 9 / 5 + 32);
        kelvin = value;
    } else {
        printOut("Invalid temperature type. Use 'C', 'F', or 'K'. ");
        return;
    }
    printOut("Temperature: ")
    printOut("Celsius: " + celsius + "C")
    printOut("Fahrenheit: " + fahrenheit + "F")
    printOut("Kelvin: " + kelvin + "K")
}

convertTemperature(30, "C");
convertTemperature(77, "F");
convertTemperature(250, "K");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateNetPrice(grossAmount, vatGroup) {
    let vatRate;

    switch (vatGroup.toLowerCase()) {
        case "normal":
            vatRate = 25;
            break;
        case "food":
            vatRate = 15;
            break;
        case "hotel":
        case "transport":
        case "cinema":
            vatRate = 10;
            break;
        default:
        printOut("Unknown VAT group");
        return NaN;
    }
    
    const netPrice = (100 * grossAmount) / (vatRate + 100);
    return netPrice;
}

printOut("Net price (Normal): " + calculateNetPrice(125, "normal").toFixed(2));
printOut("Net price (Food): " + calculateNetPrice(115, "food").toFixed(2));
printOut("Net price (Hotel): " + calculateNetPrice(110, "hotel").toFixed(2));
printOut("Net price (Unknown): " + calculateNetPrice(100, "goblins"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculate(distance, time, speed) {
    const missingArguments = [distance, time, speed].filter(arg => arg === undefined).length;
    if (missingArguments > 1) {
        return NaN;
    }
     if (distance === undefined) {
        return time * speed;
     } else if (time === undefined) {
        return distance / speed;
     } else if (speed === undefined) {
        return distance / time;
     } else {
        return NaN;
     }
}

printOut("Speed: " + calculate(150, 2, undefined) + " km/h");
printOut("Time: " + calculate(100, undefined, 50) + " h");
printOut("Distance: " + calculate(undefined, 6, 20) + " km");
printOut("Invalid: " + calculate(undefined, undefined, 50));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function resizeString(text, maxSize, character, insertBefore) {

    if (text.length >= maxSize) {
        return text;
    }

    let difference = maxSize - text.length;
    let padding = character.repeat(difference);

    let result = insertBefore ? padding + text : text + padding;

    printOut(result);
    return result;
}

resizeString(" 'This is a text ", 60, " - ", false);
resizeString(" This is a text' ", 60, " - ", true);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function generateExpressions() {
    let line = 2;
    let start = 4;
    while (line <= 200) {
        let leftSide = [];
        let rightSide = [];

        let leftCount = line + 1;
        let rightCount = line;

        for (let i = 0; i < leftCount; i++) {
            leftSide.push(start++);
        }
        for (let i = 0; i < rightCount; i++) {
            rightSide.push(start++);
        }

        let leftSum = leftSide.reduce((a, b) => a + b, 0);
        let rightSum = rightSide.reduce((a, b) => a + b, 0);

        if (leftSum !== rightSum) {
            printOut(leftSide.join(' ') + " = " + leftSum);
            printOut(rightSide.join(' ') + " = " + rightSum);
            return;
        }
        printOut(leftSide.join(' ') + " = " + rightSide.join(' '));

    }

    printOut("Maths fun!");
}

generateExpressions(200);


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    if(n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function printFactorial(n) {
    let result = factorial(n);
    printOut("factorial(" + n + ") is " + factorial(n));
}

printFactorial(9);

printOut(newLine);
