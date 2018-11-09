// Import a module using the 'require' syntax. The imports constant below will be set to be equal to the exports object from classes.js
const imports = require('./classes.js')

// The Account class is a proprty on the imported object.
const Account = imports.Account;

function createAndDescribeAccount(accountName) {
  let account = new Account(accountName);
  imports.describeAccount(account);
}

createAndDescribeAccount("Emily's account")

//Wooo!