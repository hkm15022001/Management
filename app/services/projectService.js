const Project = require("../models/project.model");

const createProjectService = async (projectObj) => {
    try {
        if(projectObj.type === 'EMPTY-PROJECT'){
            delete projectObj.type;
            console.log(projectObj);
            const result = await Project.create(projectObj);
            return result;
        }
        return "Not empty project";
    } catch (error) {
        return "Error when create project";
    }
}

module.exports = {createProjectService};