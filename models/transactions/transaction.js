let SchemaObject = require('schema-object');

module.exports = new SchemaObject({
    recipient : String,
    amount : Number,
    timestamp : String,
    type : String
});