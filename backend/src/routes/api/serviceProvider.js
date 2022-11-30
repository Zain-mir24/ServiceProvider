var express = require('express')
var router = express.Router();
var serviceController = require("../controllers/serviceProviderController")
// Job poster routes
router.post("/Adduser", serviceController.addUser)
router.patch("/ApplyJob", serviceController.ApplyJob)
router.get("/Viewalljob", serviceController.viewJobs)
module.exports = router