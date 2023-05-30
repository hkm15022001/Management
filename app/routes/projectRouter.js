const router = require("express").Router();
const {createProject} = require("../controllers/projectController");

router.post("/", createProject);
// router.post("/",createOneCustomer);
// router.post("/many",createArrCustomer);
// router.put("/",updateCustomer)
module.exports = router;