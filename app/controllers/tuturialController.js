const Tuturial = require("../models/tutorial.model");

const getTuturialById = async (req, res) => {
    const tutorialId = req.param.id;
    try {
        const tuturial = await Tuturial.findById(id);
        return tuturial;
    } catch (error) {
        console.log("Error from getTuturial", error);
    }
}

const getAllTuturialAPI = async (req, res) => {
    try {
        const result = await Tuturial.find({});

        if (result) {
            console.log(result);
            res.status(200).json({
                Ec: 0,
                data: result
            })

        } else {
            res.status(400).json({
                EC: 1,
                error: result
            });
        }
    } catch (error) {
        console.log(error);
    }

};

const createTuturialAPI = async (req, res) => {
    const { title, description, published } = req.body;

    try {
        const result = await Tuturial.create({ title, description, published });
        console.log("da tao mot document");
        res.status(201).json({
            EC: 0,
            data: result
        });
    } catch (error) {
        console.log("error from query data", error);
    }

};

const updateTuturialAPI = async (req, res) => {
    //const tuturial = getTuturialById(req.param.id);
    let { id, title, description, published } = req.body;
    try {
        const result = await Tuturial.updateOne({ _id: id }, { title, description, published });
        //console.log(result);
        if (result) {
            res.status(202).json({
                EC: 0,
                data: result
            });
        } else {
            res.status(400).json({
                EC: 1,
                error: result
            });
        }
    } catch (error) {
        console.log("error từ updateTuturial", error);
    }
}

const deleteTuturialAPI = async (req, res) => {
    const id = req.body.id;
    try {
        const result = await Tuturial.deleteOne({ _id: id });
        if (result.deletedCount > 0) {
            res.status(200).json({
                EC: 0,
                data: result
            });
        } else {
            res.status(400).json({
                EC: 1,
                data: result
            });
        }

    } catch (error) {
        console.log(error);
    }
}

const uploadFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    //console.log(req.files.image);

    try {
        const result = await uploadMutipleFiles(req.files.image);
        return res.status(201).json(result);
    } catch (error) {
        console.log("error",error);
    }
    // const result = await uploadSingleFile(req.files.image);
    // console.log(req.files.image);
    // console.log(result);
    // return res.status(201).json(result);
}

module.exports = { getAllTuturialAPI, createTuturialAPI, updateTuturialAPI, deleteTuturialAPI,uploadFileAPI};