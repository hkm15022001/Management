const { uploadSingleFile, uploadMutipleFiles } = require("../services/uploadFiles");
const { createOneCustomerService, createArrayCustomerService,getAllCustomerService,updateCustomerService } = require("../services/customerService")

const getAllCustomer = async (req, res) => {
    //console.log(req.query);
    let {page,limit} = req.query;
   // console.log(page,limit);
    let skip = (page-1)*limit;
    try {
        const result = await getAllCustomerService(skip,limit,req.query);
        return res.status(200).json({
            EC:0,
            data: result
        });
    } catch (error) {
        return res.status(400).json({
            EC:1,
            data: result
        });
    }
};

const createOneCustomer = async (req, res) => {
    const { name, sex, birthday, phone, email } = req.body;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    } else {
        const uploadResult = await uploadSingleFile(req.files.avatar);
        console.log(uploadResult.path);
        const result = await createOneCustomerService({ name, sex, birthday, phone, email, avatar: uploadResult.path });
        if (result) {
            console.log("Created customer");
            return res.status(201).json({
                EC: 0,
                data: result
            });
        }
        return res.status(400).json({
            EC: 1,
            data: "Cannot create customer"
        });
    }
};

const createArrCustomer = async (req, res) => {
    try {
        const result = await createArrayCustomerService(req.body.customers);
        return res.status(200).json({
            EC:0,
            data: result
        });
    } catch (error) {
        return res.status(400).json({
            EC:1,
            data: result
        });
    }
};

 const updateCustomer = async ( req,res) => {
    try {
        const result = await updateCustomerService(req.body.customers);
        return res.status(200).json({
            EC:0,
            data: result
        });
    } catch (error) {
        return res.status(400).json({
            EC:1,
            data: result
        });
    }
 };

module.exports = { getAllCustomer, createOneCustomer, createArrCustomer ,updateCustomer};