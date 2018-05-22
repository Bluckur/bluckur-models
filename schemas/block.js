const Transaction = require('./transaction');
const BlockHeader = require('./blockHeader');

const TransactionItem = { type: String };

module.exports = ({
  transactions: [TransactionItem],
  blockHeader: BlockHeader,
});
