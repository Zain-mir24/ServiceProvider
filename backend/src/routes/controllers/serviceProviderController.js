var user = require("../../models/userSchema");
var job = require("../../models/jobSchema");
const addUser = async (req, res, next) => {
    try {
        let result = {}
        if (req.body.userType !== "ServiceProvider") {
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
const ApplyJob = async (req, res, next) => {
    try {
        let result = {}
        const apply = await job.findByIdAndUpdate({ _id: req.body.jid }, {
            $push: {
                appliedUsers: {
                    "Uid": req.body.uid
                }
            }
        }).lean()
        if (!apply) {
            result = {
                status: 400,
                Message: "Failure",
                data: apply
            }
            res.status(400).send(result)
        }
        else {
            result = {
                status: 200,
                Message: "Success",
                data: apply
            }
            res.status(200).send(result)

        }
    } catch (e) {
        console.log(e)
    }
}
const viewJobs = async (req, res, next) => {
    try {
        let result = {};
        const jobs = await job.find()
        if (!jobs) {
            result = {
                status: 400,
                Message: "Failure",
                data: jobs
            }
            res.status(400).send(result)
        }
        else {
            result = {
                status: 200,
                Message: "Success",
                data: jobs
            }
            res.status(200).send(result)

        }

    } catch (e) {
        result = {
            status: 400,
            Message: "Failure",
            data: e
        }
        res.status(400).send(e)
    }
}
module.exports = { addUser, ApplyJob, viewJobs }