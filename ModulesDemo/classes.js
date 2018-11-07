class Account {
  constructor(Name) {
    this.name = Name;
    this.bankBalance = 0;
  }
}

function describeAccount(account) {
  console.log(account.name)
}

// This is the syntax for adding properties to the exports object.
// Proprties can include constants, classes and functions
exports.Account = Account;
exports.describeAccount = describeAccount;

// This syntax doesn't work
// exports = {
//   account: Account,
//   getAccounts: getAccount
// }