const { connect, connection } = require("mongoose");

connect("mongodb://localhost/shopify-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
