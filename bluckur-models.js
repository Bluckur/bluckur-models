const blockBlueprint = require('./models/block');
const blockHeaderBlueprint = require('./models/blockHeader');
const transactionBlueprint = require('./models/transactions/transaction');
const stakeTransactionBlueprint = require('./models/transactions/stakeTransaction');
const coinTransactionBlueprint = require('./models/transactions/coinTransaction');
const coinbaseTransactionBlueprint = require('./models/transactions/coinbaseTransaction');

module.exports = {
    blockBlueprint,
    blockHeaderBlueprint,
    transactionBlueprint,
    stakeTransactionBlueprint,
    coinbaseTransactionBlueprint,
    coinbaseTransactionBlueprint
}