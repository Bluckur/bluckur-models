let Transaction = require('./transaction');

module.exports = Transaction.extend({
    sender : String,
    signature : String
})