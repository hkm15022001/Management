const {createProjectService} = require("../services/projectService");

const createProject = async (req,res) => {
    try {
        let projectObj = req.body;

        let result =  await createProjectService(projectObj);
        return res.status(201).json(
            {
                EC: 0,
                data: result
            }
        )
    } catch (error) {
        return res.status(400).json(
            {
                EC: 1,
                error: result
            }
        )    
    }

};

module.exports = {createProject};