const express = require("express");
const router = express.Router();

const recordController = require("../controllers/records")
const validator = require('../middlewares/validator')
const queryRecordSchema = require('../validations/records')

router.route("/").post(validator(queryRecordSchema),recordController.recordsBetweenDateAndCount);
module.exports = router;
