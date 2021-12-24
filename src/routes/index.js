const express = require("express");
const router = express.Router();

const recordController = require("../controllers/Records")
const validator = require('../middlewares/validator')
const {queryRecordSchema} = require('../validations/Records')

router.route("/").post(validator(queryRecordSchema),recordController.recordsBetweenDateAndCount);
module.exports = router;
