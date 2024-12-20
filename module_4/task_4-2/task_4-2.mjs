"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
numbers[20] = "End";

const iterator = numbers.keys();
for (const key of iterator) {
    printOut(key + ": " + numbers[key]);
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

printOut(numbers2.join(" - "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "Hei på deg, hvordan har du det";

const words = text.split(" ");

for (let i = 0; i < words.length; i++) {
    printOut("Word number: " + i + 1 + ", Index: " + i + ", Word: " + words[i]);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const names = ["Anne", "Inger", "Kari", "Marit","Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeElement(array, textToRemove) {
    const index = array.indexOf(textToRemove);

    if (index !== -1) {
        array.splice(index, 1);
        printOut(textToRemove + " was removed from the array");
    } else {
        printOut(textToRemove + " does not exist in the array");
    }
}

removeElement(names, "Anne");
removeElement(names, "Nina");

printOut("Updated array: " + names);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girlNames = ["Anne", "Inger", "Kari", "Marit","Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const allNames = girlNames.concat(boyNames);

printOut("All names: " + allNames);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
    constructor(aTitle, aAuthor, aISBN) {
        this.title = aTitle;
        this.author = aAuthor;
        this.isbn = aISBN;
    }

    toString() {
        return "Title: " + this.title + ", Author: " + this.author + ", ISBN: " + this.isbn;
    }
}

const books = [
    new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9097980790368"),
    new TBook("To kill a Mockingbird", "Harper Lee", "9049702000346"),
    new TBook("1984", "George Orwell", "9037581548750"),
];

for (const book of books) {
    printOut(book.toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: { value: 0x01, work: "Mandag" },
    WeekDay2: { value: 0x02, training: "Tirsdag" },
    WeekDay3: { value: 0x03, jog: "Onsdag" },
    WeekDay4: { value: 0x04, work: "Torsdag" },
    WeekDay5: { value: 0x05, cinema: "Fredag" },
    WeekDay6: { value: 0x06, work: "Lørdag" },
    WeekDay7: { value: 0x07, out: "Søndag" },
    WorkDays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, work: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, work: "Helg" },
};

const keys = Object.keys(EWeekDays);

keys.forEach(key => {
    const day = EWeekDays[key];
    printOut(key + ": value = " + day.value + ", name = " + day.work);
});

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers = Array.from ({ length: 35}, () => Math.floor(Math.random() * 20) + 1);

const ascendingOrder = [randomNumbers].sort((a, b) => a - b);

const descendingOrder = [randomNumbers].sort((a, b) => b - a);

printOut("Original Array: " + randomNumbers);
printOut("Ascending Order: " + ascendingOrder);
printOut("Descending Order: " + descendingOrder);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers2 = Array.from ({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);

const frequencyMap = randomNumbers2.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
}, {});

const numberFrequencyPairs = Object.entries(frequencyMap).map(([num, freq]) => ({
    number: number(num),
    frequency: freq
}));

numberFrequencyPairs.sort((a, b) => {
    if (b.frequency === a.frequency) {
        return a.number - b.number;
    }
    return b.frequency - a.frequency;
})

printOut("Numbers and their frequencies");
numberFrequencyPairs.forEach(pair => {
    printOut("Number: " + pair.number + ", Frequency: " + pair.frequency);
});

const frequencyGroups = numberFrequencyPairs.reduce((groups, pair) => {
    const { frequency, number } = pair;
    if (!groups[frequency]) {
        groups[frequency] = [];
    }
    groups[frequency]. push(number);
    return groups;
}, {});

printOut("\nFrequencies and their corresponding number:");
Object.keys(frequencyGroups)
.sort((a, b) => b - a)
.forEach(freq => {
    const numbers2 = frequencyGroups[freq];
    printOut("Frequency " + freq + ", Numbers: " + numbers2.join(", "));
});

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const array2D = [];

for (let row = 0; row < 5; row++) {
    const rowArray = [];
    for (let col = 0; col < 9; col++) {
        rowArray.push("Row " + row + "Col " + col);
    }
    array2D.push(rowArray);
}

printOut("Array Contents:");
for (let row = 0; row < array2D.length; row++) {
    for (let col = 0; col < array2D.length; col++) {
        printOut("Cell at [" + row + "][" + col + "]: " + array2D[row][col]);
    }
}

printOut("\nComplete 2D Array:");
for (let row = 0; row < array2D.length; row++) {
    printOut(array2D[row].join(" | "));
}

printOut(newLine);
