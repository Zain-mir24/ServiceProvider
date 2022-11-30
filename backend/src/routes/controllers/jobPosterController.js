var user = require("../../models/userSchema");
var job = require("../../models/jobSchema");
const addUser = async (req, res, next) => {
    try {
        let result = {}
        if (req.body.userType !== "JobProvider") {
            result = {
                status: 400,
                Message: "Failure",
                data: "Incorrect user type"
            }
            res.status(400).send(result)
        }
        else {
            const add = await user.create({
                name: req.body.name,
                userType: req.body.userType
            })
            if (!add) {
                result = {
                    status: 400,
                    Message: "Failure",
                    data: add
                }
                res.status(400).send(result)
            }
            else {
                result = {
                    status: 200,
                    Message: "Success",
                    data: add
                }
                res.status(200).send(result)

            }
        }
    } catch (e) {
        console.log(e, "Error")
    }

}
const addJobPoster = async (req, res, next) => {
    try {
        let result = {}
        const find = await user.find({ Eid: req.body.Eid });
        if (!find) {
            result = {
                status: 400,
                Message: "Failure",
                data: "Incorrect Employer ID"
            }
            res.status(400).send(result)
        }

        const add = await job.create({
            Eid: req.body.Eid,
            jobName: req.body.jobName,
            salary: req.body.salary,
            description: req.body.description,
        })
        if (!add) {
            result = {
                status: 400,
                Message: "Failure",
                data: add
            }
            res.status(400).send(result)
        }
        else {
            result = {
                status: 200,
                Message: "Success",
                data: add
            }
            res.status(200).send(result)

        }

    } catch (e) {
        console.log(e, "Error")
    }

}
const jobHistory = async (req, res, next) => {
    try {
        let result = {}
        const find = await job.find({ Eid: req.query.Eid });
        if (!find) {
            result = {
                status: 400,
                Message: "Failure",
                data: find
            }
            res.status(400).send(result)
        } else {
            result = {
                status: 200,
                Message: "Success",
                data: find
            }
            res.status(200).send(result)

        }
    } catch (e) {
        result = {
            status: 400,
            Message: "Failure",
            data: e
        }
        res.status(400).send(result)

    }

}
const peopleApplied = async (req, res, next) => {
    try {
        let result = {}
        const find = await job.find().populate({
            path: "appliedUsers",
            populate: 'Uid',
            model: 'User'
        });
        if (!find) {
            result = {
                status: 400,
                Message: "Failure",
                data: find
            }
            res.status(400).send(result)
        } else {
            result = {
                status: 200,
                Message: "Success",
                data: find
            }
            res.status(200).send(result)

        }
    } catch (e) {
        result = {
            status: 400,
            Message: "Failure",
            data: e
        }
        res.status(400).send(result)

    }

}
module.exports = { addUser, addJobPoster, jobHistory, peopleApplied }