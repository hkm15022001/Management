const tuturialRouter = require("./tuturialRoute");
const filesRouter = require("./filesRouter");
const customerRouter = require("./customerRouter");

module.exports = (app) => {
  
    app.use("/api/v1/tuturial",tuturialRouter)
    
    app.use("/api/v1/file",filesRouter);

    app.use("/api/v1/customer",customerRouter);
};