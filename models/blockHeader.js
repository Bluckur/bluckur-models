let SchemaObject = require('schema-object');

module.exports = new SchemaObject ({
    version : String,
    blockNumber : Number,
    validator : String,
    timeStamp : String,
    blockReward : Number,
    blockHash : String,
    parentHash : String
});