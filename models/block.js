let SchemaObject = require('schema-object');

let Transaction = require('./transactions/transaction');
let BlockHeader = require('./blockHeader');

module.exports = new SchemaObject({
    transactions : [Transaction],
    header : Blockheader
});