const SchemaObject = require('schema-object');
const blockSchema = require('./schemas/block');
const blockHeaderSchema = require('./schemas/blockHeader');
const transactionSchema = require('./schemas/transaction');
const stateSchema = require('./schemas/state');

// Objects
const Block = new SchemaObject(blockSchema, { setUndefined: true });
const BlockHeader = new SchemaObject(blockHeaderSchema, { setUndefined: true });
const Transaction = new SchemaObject(transactionSchema, { setUndefined: true });
const State = new SchemaObject(stateSchema, { setUndefined: true });

module.exports = {
  blockBlueprint: blockSchema,
  blockHeaderBlueprint: blockHeaderSchema,
  transactionBlueprint: transactionSchema,
  stateBlueprint: stateSchema,

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
    return block.toObject();
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
    return blockHeader.toObject();
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
    return transaction.toObject();
  },

  /**
   * [createStateInstance description]
   * @param  {Object} args [description]
   * @return {Transaction} [description]
   * @return {Error} [description]
   */
  createStateInstance(args) {
    const state = new State({
      publicKey: args.publicKey || '',
      coin: args.coin || 0,
      stake: args.stake || 0,
    });
    if (state.isErrors()) {
      return new Error(state.getErrors());
    }
    return state.toObject();
  },

  /**
   * [validateBlockSchema description]
   * @param  {Block} block [description]
   * @return {Boolean}       [description]
   */
  validateBlockSchema(block) {
    return !(this.createBlockInstance(block) instanceof Error);
  },

  /**
   * [validateBlockHeaderSchema description]
   * @param  {BlockHeader} blockHeader [description]
   * @return {Boolean}             [description]
   */
  validateBlockHeaderSchema(blockHeader) {
    return !(this.createBlockHeaderInstance(blockHeader) instanceof Error);
  },

  /**
   * [validateTransactionSchema description]
   * @param  {Transaction} transaction [description]
   * @return {Boolean}             [description]
   */
  validateTransactionSchema(transaction) {
    return !(this.createTransactionInstance(transaction) instanceof Error);
  },

  /**
   * [validateStateSchema description]
   * @param  {State} state [description]
   * @return {Boolean}       [description]
   */
  validateStateSchema(state) {
    return !(this.createStateInstance(state) instanceof Error);
  },
};
