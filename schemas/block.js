const Transaction = require('./transaction');
const BlockHeader = require('./blockHeader');

const TransactionItem = { type: Transaction };

module.exports = ({
  transactions: [BlockHeader],
  blockHeader: BlockHeader,
});
