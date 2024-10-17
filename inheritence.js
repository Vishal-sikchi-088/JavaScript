class BankAccount {
    customerName
    accountNumber
    #balance = 0

    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.accountNumber = Date.now()
        this.#balance = balance
    }

    get balance (){
        return this.#balance
    }

    set balance(amount){
        this.#balance = amount
    }

    deposit(amount) {
        this.#balance += amount
    }

    withdraw(amount) {
        this.#balance -= amount
    }
}




class SavingAccount extends BankAccount{
    constructor(customerName, balance = 0) {
        super(customerName, balance)
        this.transactionLimit = 10000
    }

    #calculateInterst (amount) {
        console.log('calculating interest of', amount)
    }
    takePersonalLoam(amount) {
        this.#calculateInterst(amount)
        console.log("Taking loan of " + amount)
    }
}

SavingAccount.prototype = Object.create(BankAccount.prototype)

const visal = new SavingAccount('vishal', 200)
visal.balance = 5000
visal.takePersonalLoam(50000)

console.log(visal.balance)
// console.log(visal)