// Bank Account Class

class BankAccount {

    // Private instance field
    #balance;

    // Static property belongs to the class itself.
    static totalBankAcc = 0;

    constructor(initialBalance = 0) {

        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }

        this.#balance = initialBalance;

        // Increment total account count.
        BankAccount.totalBankAcc++;
    }

    // Instance method
    getBalance() {
        console.log("Balance:", this.#balance);
        return this.#balance;
    }

    withdraw(amount) {

        // Handle invalid amount.
        if (amount <= 0) {
            console.log("Amount must be greater than zero.");
            return;
        }

        // Use the private field #balance.
        if (amount > this.#balance) {
            console.log("Insufficient funds.");
            return;
        }

        this.#balance -= amount;

        console.log(amount, "withdrawn.");
        this.getBalance();
    }

    deposit(amount) {

        if (amount <= 0) {
            console.log("Amount must be greater than zero.");
            return;
        }

        this.#balance += amount;

        console.log(amount, "deposited.");
        this.getBalance();
    }

    // Static method
    // Belongs to the class, not individual instances.
    static calculateTax() {
        console.log("Calculating tax...");
    }
}

const bankAcc1 = new BankAccount(12345);

bankAcc1.getBalance();

bankAcc1.withdraw(120);
bankAcc1.deposit(-90);

bankAcc1.getBalance();

// Private field cannot be accessed outside the class.
// console.log(bankAcc1.#balance); // SyntaxError

// Static method called using the class.
BankAccount.calculateTax();

// This will not work:
// bankAcc1.calculateTax();

// Static property
console.log("Total accounts:", BankAccount.totalBankAcc);