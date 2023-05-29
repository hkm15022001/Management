const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema(
  {
    title : {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    published:{
      type: Boolean
    }
  }
)

module.exports = mongoose.model("Tuturial",tutorialSchema);
