// class.js
// Class example: private fields, instance methods, static members, and validation.

class BankAccount {
    #balance;
    static totalBankAcc = 0;

    constructor(initialBalance = 0) {
        if (!Number.isFinite(initialBalance) || initialBalance < 0) {
            throw new Error("Initial balance must be a non-negative number.");
        }

        this.#balance = initialBalance;
        BankAccount.totalBankAcc++;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            console.log("Deposit amount must be a positive number.");
            return false;
        }

        this.#balance += amount;
        console.log(`${amount} deposited. Balance: ${this.#balance}`);
        return true;
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            console.log("Withdrawal amount must be a positive number.");
            return false;
        }

        if (amount > this.#balance) {
            console.log("Insufficient funds.");
            return false;
        }

        this.#balance -= amount;
        console.log(`${amount} withdrawn. Balance: ${this.#balance}`);
        return true;
    }

    // Static methods belong to the class itself.
    static calculateTax() {
        console.log("Calculating tax...");
    }
}

const bankAcc1 = new BankAccount(12345);
const bankAcc2 = new BankAccount(5000);

console.log("Account 1 balance:", bankAcc1.getBalance());
bankAcc1.deposit(500);
bankAcc1.withdraw(200);

console.log(bankAcc1 instanceof BankAccount); // true
console.log(BankAccount.totalBankAcc);         // 2
BankAccount.calculateTax();

// instanceof checks the prototype chain; it is not a general type test.
console.log(1 instanceof Object);             // false: primitive number
console.log(Number(1) instanceof Object);     // false: still a primitive
console.log(new Number(1) instanceof Object); // true: wrapper object
// Prefer primitive numbers (1) over wrapper objects (new Number(1)).

console.log(Object.getPrototypeOf(bankAcc1) === BankAccount.prototype); // true
console.log(Object.getPrototypeOf(BankAccount.prototype) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null

// Private fields cannot be accessed outside the class:
// console.log(bankAcc1.#balance); // SyntaxError
