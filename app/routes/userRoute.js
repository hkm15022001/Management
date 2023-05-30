const router = require ("express").Router();
const {getAllUserAPI,createUserAPI,updateUserAPI, deleteUserAPI} = require("../controllers/userController");

// User api
router.get("/", getAllUserAPI);
router.post("/", createUserAPI);
router.put("/", updateUserAPI);
router.delete("/", deleteUserAPI);

module.exports = router;