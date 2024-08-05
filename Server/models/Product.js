const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
});

const Product = model("product", productSchema);

module.exports = Product;
