var express = require('express')
var router = express.Router();
const jobController = require("../controllers/jobPosterController")

// Job poster routes

router.post("/Adduser", jobController.addUser)
router.post("/Addjob", jobController.addJobPoster)
router.get("/Viewjobhistory", jobController.jobHistory)
router.get("/PeopleApplied", jobController.peopleApplied)
router.get('/', function (req, res, next) {
    res.send('respond with a for job provider');
});

module.exports = router