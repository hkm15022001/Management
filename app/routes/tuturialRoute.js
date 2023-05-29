const router = require ("express").Router();
const {getAllTuturialAPI,createTuturialAPI,updateTuturialAPI, deleteTuturialAPI} = require("../controllers/tuturialController");

// Tuturial api
router.get("/", getAllTuturialAPI);
router.post("/", createTuturialAPI);
router.put("/", updateTuturialAPI);
router.delete("/", deleteTuturialAPI);

module.exports = router;