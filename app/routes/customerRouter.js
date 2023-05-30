const router = require("express").Router();
const {getAllCustomer,createOneCustomer,createArrCustomer,updateCustomer} = require("../controllers/customerController");

router.get("/",getAllCustomer);
router.post("/",createOneCustomer);
router.post("/many",createArrCustomer);
router.put("/",updateCustomer);

module.exports = router;