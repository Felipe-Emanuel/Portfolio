const mongoose = require("mongoose");

const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
    passwordResetToken: String,
    passwordResetExpires: String
});

module.exports = User;