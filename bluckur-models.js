const SchemaObject = require('schema-object');
const blockSchema = require('./schemas/block');
const blockHeaderSchema = require('./schemas/blockHeader');
const transactionSchema = require('./schemas/transaction');

// Objects
const Block = new SchemaObject(blockSchema);
const BlockHeader = new SchemaObject(blockHeaderSchema);
const Transaction = new SchemaObject(transactionSchema);

module.exports = {
  /**
     * [createBlockInstance description]
     * @param  {object} args [description]
     * @return {Block} [description]
     * @return {Error} [description]
     */
  createBlockInstance(args) {
    const block = new Block({
      transactions: args.transactions || [],
      blockHeader: args.blockHeader || null,
    });
    if (block.isErrors()) {
      return new Error(block.getErrors());
    }
    return block;
  },
  /**
     * [createBlockHeaderInstance description]
     * @param  {object} args [description]
     * @return {BlockHeader} [description]
     * @return {Error} [description]
     */
  createBlockHeaderInstance(args) {
    const blockHeader = new BlockHeader({
      version: args.version || 1,
      blockNumber: args.blockNumber || 0,
      validator: args.validator || '',
      timestamp: args.timestamp || -1,
      blockReward: args.blockReward || 25,
      blockHash: args.blockHash || '0',
      parentHash: args.parentHash || '',
    });
    if (blockHeader.isErrors()) {
      return new Error(blockHeader.getErrors());
    }
    return blockHeader;
  },

  /**
     * [createTransactionInstance description]
     * @param  {object} args [description]
     * @return {Transaction} [description]
     * @return {Error} [description]
     */
  createTransactionInstance(args) {
    const transaction = new Transaction({
      recipient: args.recipient || '',
      amount: args.amount || 0,
      timestamp: args.timestamp || -1,
      type: args.type || '',
      sender: args.sender || '',
      signature: args.signature || '',
      blockHash: args.blockHash || '',
    });
    if (transaction.isErrors()) {
      return new Error(transaction.getErrors());
    }
    return transaction;
  },
};
