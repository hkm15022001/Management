const mongoose = require("mongoose");

const leaderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String
        }
    }
);

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone:{
            type: String
        },
        email: {
            type: String
        }
    }
);

const projectSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required: true
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        description: {
            type: String
        },
        customerInfor: customerSchema,
        leader: leaderSchema
    }
);

module.exports = mongoose.model("Project", projectSchema);


// {
//     "type": "EMPTY-PROJECT",
//     "name": "test project 1",
//     "startDate": "24/12/2022",
//     "endDate": "25/12/2023",
//     "description": "just a test project",
//     "customerInfor": {
//     "name": "eric",
//     "phone": "0123456789",
//     "email": "hoidanit@gmail.com"
//     },
//     "leader": {
//     "name": "aka",
//     "email": "eric@gmail.com"
//     }
//     }
