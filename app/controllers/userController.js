const User = require("../models/user.model");

const getUserById = async (req, res) => {
    const tutorialId = req.param.id;
    try {
        const User = await User.findById(id);
        return User;
    } catch (error) {
        console.log("Error from getUser", error);
    }
}

const getAllUserAPI = async (req, res) => {
    try {
        const result = await User.find({});

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

const createUserAPI = async (req, res) => {
    const { name, email, city } = req.body;

    try {
        const result = await User.create({ name, email, city });
        console.log("da tao mot document");
        res.status(201).json({
            EC: 0,
            data: result
        });
    } catch (error) {
        console.log("error from query data", error);
    }

};

const updateUserAPI = async (req, res) => {
    //const User = getUserById(req.param.id);
    let { id, title, description, published } = req.body;
    try {
        const result = await User.updateOne({ _id: id }, { title, description, published });
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
        console.log("error từ updateUser", error);
    }
}

const deleteUserAPI = async (req, res) => {
    const id = req.body.id;
    try {
        const result = await User.deleteOne({ _id: id });
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


module.exports = { getAllUserAPI, createUserAPI, updateUserAPI, deleteUserAPI};