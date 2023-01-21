const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

});

const userDb = mongoose.model("userDb", schema);

module.exports = userDb;