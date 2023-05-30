const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String

    },
    birthday: {
        type: Date
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    avatar: {
        type: String
    }
},
    {
        timestamps: true
    })
module.exports = mongoose.model("Customer", customerSchema)