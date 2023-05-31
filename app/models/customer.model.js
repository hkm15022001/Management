const mongoose = require("mongoose");
const mongoose_delete = require('mongoose-delete');

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

customerSchema.plugin(mongoose_delete);
module.exports = mongoose.model("Customer", customerSchema)