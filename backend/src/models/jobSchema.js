var mongoose = require("mongoose")
var schema = mongoose.Schema;
var jobSchema = new schema({
    Eid: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    jobName: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    appliedUsers: [{
        Uid: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },

    }]


})
module.exports = mongoose.model("Job", jobSchema)