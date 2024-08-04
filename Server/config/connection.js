const { connect, connection } = require("mongoose");

connect("mongodb://localhost/shopify-db", {});
module.exports = connection;
