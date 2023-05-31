const router = require("express").Router();
const {getAllCustomer,createOneCustomer,createArrCustomer,updateCustomer,deleteCustomer} = require("../controllers/customerController");

router.get("/",getAllCustomer);
router.post("/",createOneCustomer);
router.post("/many",createArrCustomer);
router.put("/",updateCustomer);
router.delete("/",deleteCustomer);

module.exports = router;