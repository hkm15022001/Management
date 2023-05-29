module.exports = (app) => {
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.get("/", (req,res) => {})
    router.post("/create", (req,res) => {});
  
    router.get("/create", (req,res) => {});
  
    // Retrieve a single Tutorial with id
    router.get("/:id", (req,res) => {});
  
    // Update a Tutorial with id
    router.put("/:id", (req,res) => {});
    
    //app.use('/tutorials', getAllTuturial);

};