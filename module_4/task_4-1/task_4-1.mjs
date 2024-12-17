"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto",
};

const accountTypeLine = Object.values(AccountType).join(", ");

printOut(accountTypeLine);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount {
    #type;

    constructor(initialType) {
        this.#type = initialType;
    }

    toString() {
        return this.#type;
    }

    setType(newType) {
        printOut("Account is changed from " + this.#type + "to " + newType);
        this.#type = newType;
    }
}

const myAccount = new TAccount("Brukskonto");

printOut("myAccount = " + myAccount.toString());

myAccount.setType("Sparekonto");

printOut("myAccount = " + myAccount.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBankAccount {
    #balance;
    constructor() {
        this.#balance = 100;
    }
    
    get balance() {
        return this.#balance;
    }
    
    withdraw(amount) {
        if(amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            PrintOut ("No funds");
        }
    }
}

const account3 = new TBankAccount();
printOut("Deposit of " + account3.balance + ", new balance is " + account3.balance);

account3.withdraw(25);
printOut("withdraw of 25, new balance is " + account3.balance);

printOut("My account balance is " + account3.balance);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class Account {
    constructor() {
        this.balance = 0;
        this.type = "Saving";
        this.withdrawCounter = 0;
        this.maxWithdraw = 3;
    }

    deposit(amount) {
        if (amount <= 0) {
            printOut("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        this.resetCounter();
        printOut("Deposited " + amount + ". New balance: " + this.balance);
    }

    setType(newType) {
        if (newType !== "Saving" && newType !== "Pension") {
            printOut("Invalid account type. Use 'Saving' or 'Pension'.");
            return;
        }
        this.type = newType;
        this.resetCounter();
        printOut("Account type set to " + this.type);
    }

    withdraw(amount) {
        if (amount <= 0) {
            printOut("Withdraw amount must be positive");
            return;
        }

        switch (this.type) {
            case "Saving":
            if (this.withdrawCounter >= this.maxWithdraw) {
                printOut("You cant withdraw from Sparekonto more than three times!");
                return;
            }
            this.balance -= amount;
            this.withdrawCounter++;
            printOut("Withdraw " + amount + ". New balance: " + this.balance);
            break;

        case "Pension":
            printOut("You can't withdraw from a Pensionkonto!");
            break;

        default:
            printOut("Invalid account type.");
        }
    }
    resetCounter() {
        this.withdrawCounter = 0;
    }
}

const mineAccount = new Account();

mineAccount.deposit(100);
mineAccount.setType("Saving");

mineAccount.withdraw(30);
mineAccount.withdraw(30);
mineAccount.withdraw(30);
mineAccount.withdraw(10);

mineAccount.setType("Pension");

mineAccount.withdraw(50);

mineAccount.deposit(150);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const CurrencyType = {
    NOK: { value: 1.000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound Sterling", denomination: "£" },
    INR: { value: 7.3809, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australienske dollar", denomination: "A$" },
    PHP: { value: 5.6582, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai Baht", denomination: "฿" },
};

class Account {
    #currencyType;
    #balance;

    constructor() {
        this.#currencyType = "NOK";
        this.#balance = 0;
    }

    set currencyTypeP5(newCurrency) {
        if (newCurrency === this.#currencyType) {
            return;
        }
        if (CurrencyType[newCurrency]) {
            this.#currencyType = CurrencyType[newCurrency];
        } else {
            printOut("Invalid currency type.");
        }
        
    }

    get currencyTypeP5S() {
        return this.#currencyType;
    }

    deposit(amount) {
        if (amount <= 0) {
            printOut("Deposit amount must be greater than zero.")
            return;
        }
        this.#balance += amount;
        printOut("Deposit of " + amount + "kr, new balance is " + this.#balance + "kr.");
    }
    
    get balance() {
        return this.#balance;
    }
}

const myAccount5 = new Account();
myAccount5.deposit(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const CurrencyType6 = {
    NOK6: { value: 1, name: "Norske korner" },
    SEK6: { value: 0.92, name: "Svenske kroner" },
    USD6: { value: 1, name: "United States dollar" },
};

class Account {
    #currencyType;
    #balance;

    constructor() {
        this.#currencyType = CurrencyType6.NOK6;
        this.#balance = 0;
    }

    #currencyConvert(aType) {
        return (CurrencyType6.NOK6.value / aType.value) * this.#currencyType.value;
    }

    set currencyTypeP6(newCurrency) {
        if (newCurrency === this.#currencyType) {
            return;
        }

        const convertedBalance = this.#currencyConvert(newCurrency);
        this.#balance = convertedBalance;
        this.#currencyType = newCurrency;
    }

    get currencyTypeP6S() {
        return this.#currencyType.name;
    }

    deposit(amount) {
        if (amount <= 0) {
            printOut("Deposit amount must be greater than zero.");
            return;
        } 
        this.#balance += amount;
        printOut("Deposit of " + amount.toFixed(2) + this.#currencyType.name + ", new balance is " + this.#balance.toFixed(2) + this.#currencyType.name);
    }

    get balance() {
        return this.#balance.toFixed(2);
    }
}

const myAccount6 = new Account();

myAccount6.deposit(153.87);

myAccount6.setCurrencyType(CurrencyType6.SEK6);
printOut("The account currency has changed from " + CurrencyType6.NOK6.name + " to " + myAccount6.currencyTypeP6());
printOut("New balance is " + myAccount6.balance() + myAccount6.currencyTypeP6S());

myAccount6.setCurrencyType(CurrencyType6.USD6);
printOut("The account currency has changed from " + CurrencyType6.SEK6.name + " to " + myAccount6.currencyTypeP6());
printOut("New balance is " + myAccount6.balance() + myAccount6.currencyTypeP6S());

myAccount6.setCurrencyType(CurrencyType6.NOK6);
printOut("The account currency has changed from " + CurrencyType6.USD6.name + " to " + myAccount6.currencyTypeP6());
printOut("New balance is " + myAccount6.balance() + myAccount6.currencyTypeP6S());


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAcount {
    constructor() {
        this.balance = 0;
        this.currencyType = "NOK";
        this.exchangeRates = {
            "USD": 10.83,
            "GBP": 12.19,
            "NOK": 1,
            "CAD": 7.85,
            "INR": 0.13,
            "SEK": 0.95
        };
    }

    setCurrencyType(aType) {
        if (this.exchangeRates[aType]) {
            printOut("The account currency has changed from " + this.currencyType + " to " + aType);
            printOut("New balance is " + this.convertBalanceToCurrentCurrency().toFixed(2) + this.currencyType);
            this.currencyType = aType;
        } else {
            printOut("Currency type " + aType + " is not supported.");
        }
    }

    deposit(aAmount, aType = "NOK") {
        if (!this.exchangeRates[aType]) {
            printOut("Currency type " + aType + " is not supported.");
            return;
        }
        const amountInNOK = aAmount * this.exchangeRates[aType];
        this.balance += amountInNOK;
        printOut("Deposit of " + aAmount.toFixed(2) + aType + ", new balance is " + this.convertBalanceToCurrentCurrency().toFixed(2) + this.currencyType);
    }

    withdraw(aAmount, aType = "NOK") {
        if (!this.exchangeRates[aType]) {
            printOut("Currency type " + aType + "is not supported.");
            return;
        }
        const amountInNOK = aAmount * this.exchangeRates[aType];
        if (amountInNOK > this.balance) {
            printOut("Insufficient balance to withdraw " + aAmount.toFixed(2) + aType);
            return;
        }
        this.balance -= amountInNOK;
        printOut("Withdrawal of " + aAmount.toFixed(2) + aType + ", new balance is " + this.convertBalanceToCurrentCurrency().toFixed(2) + this.currencyType);
    }

    convertBalanceToCurrentCurrency() {
        return this.balance / this.exchangeRates[this.currencyType];
    }
}

const account = new TAcount();

account.deposit(12, "USD");
account.withdraw(10, "GBP");

account.setCurrencyType("CAD");
account.setCurrencyType("INR");

account.withdraw(account.convertBalanceToCurrentCurrency(), "SEK");

printOut(newLine);
