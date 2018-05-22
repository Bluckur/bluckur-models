const Transaction = require('./transaction');
const BlockHeader = require('./blockHeader');

module.exports = ({
  transactions: { type: Array, items: Transaction },
  blockHeader: BlockHeader,
});
