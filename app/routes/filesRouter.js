const router = require("express").Router();
const {uploadMultipleFilesAPI} = require("../controllers/fileController");

router.post("/",uploadMultipleFilesAPI);

module.exports = router;