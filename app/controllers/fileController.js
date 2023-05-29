const {uploadSingleFile,uploadMutipleFiles} = require("../services/uploadFiles");

const uploadSingleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    //console.log(req.files.image);

    try {
        const result = await uploadSingleFile(req.files.image);
        return res.status(201).json(result);
    } catch (error) {
        console.log("error",error);
    }
    // const result = await uploadSingleFile(req.files.image);
    // console.log(req.files.image);
    // console.log(result);
    // return res.status(201).json(result);
}

const uploadMultipleFilesAPI = async (req,res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    //console.log(req.files.image);

    try {
        const result = await uploadMutipleFiles(req.files.image);
        return res.status(201).json(result);
    } catch (error) {
        console.log("error",error);
        return res.status(400).json(result);
    }
}
module.exports = {uploadMultipleFilesAPI,uploadSingleFile};