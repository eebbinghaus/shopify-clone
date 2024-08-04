const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Email Validation Failed"],
    },
    phone: {
        type: Number,
        unique: true,
        required: true,
        match: [
            /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
            "Phone Validation Failed",
        ],
    },
});

const User = model("user", userSchema);

module.exports = User;
