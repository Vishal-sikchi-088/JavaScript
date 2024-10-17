const accounts = []

function BankAccount(customerName, balance = 0){
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance

    this.deposit = function (amount) {
        this.balance += amount
    }

    this.withdraw = (amount) => {
        this.balance -= amount
    }
}

const vishalAccount = new BankAccount('Vishal S',1000)
const johnAccount = new BankAccount('Vishal S')
vishalAccount.deposit(5000)
vishalAccount.withdraw(2000)


const customerForm = document.querySelector('#accountForm')
const customerName = document.querySelector('#customerName')
const balance = document.querySelector('#balance')

customerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const account = new BankAccount(customerName.value, Number(balance.value))
    accounts.push(account)
    console.log(accounts)
})

const depositForm = document.querySelector('#depositForm')
const accountNumber = document.querySelector('#accountNumber')
const amount = document.querySelector('#amount')

depositForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const account = accounts.find((res) => {
       if(res.accountNumber === Number(accountNumber.value)) {
        return res
       }
    })
    account.deposit(Number(amount.value))
    console.log(accounts)
})
// console.log(vishalAccount)
// console.log(johnAccount)
