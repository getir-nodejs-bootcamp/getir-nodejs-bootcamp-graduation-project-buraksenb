const express = require("express");
const recordController = require("../controllers/Records")
const router = express.Router();

router.route("/").post(recordController.recordsBetweenDateAndCount);

module.exports = router;
