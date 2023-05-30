const userRouter = require("./userRoute");
const filesRouter = require("./filesRouter");
const customerRouter = require("./customerRouter");
const projectRouter = require("./projectRouter")

module.exports = (app) => {
  
    app.use("/api/v1/user",userRouter)
    
    app.use("/api/v1/file",filesRouter);

    app.use("/api/v1/customer",customerRouter);

    app.use("/api/v1/project",projectRouter);
};