const Customer = require("../models/customer.model");
const aqp = require("api-query-params");

const createOneCustomerService = async(customer) => {
    let { birthday} = customer;
    birthday =new Date(birthday);
    try{
        const result = await Customer.create({birthday,...customer}) ;
        return result;
    } catch(error){
        console.log(error);
        return "error from createoneuser";
    } 
}

const createArrayCustomerService = async(customerArr) => {
    try{
        const result = await Customer.insertMany(customerArr).exec();
        console.log(result);
        return result;
    } catch(error){
        return "Error when create customers";
    }
}

const getAllCustomerService = async (skip,limit,queryStr) => {
    try {
        //console.log(aqp(queryStr));
        let{filter} = aqp(queryStr);
        delete filter.page;
        //console.log(filter);
        let result = null;
        if(limit&&skip){
            result = await Customer.find(filter).skip(skip).limit(limit).exec(); // vít liền đc như vầy là sd cơ chế promise
        } else{
            result = await Customer.find({}).exec();
        }
        return result;
    } catch (error) {
        console.log(error);
        return "Error when get customers";
    }
}

const updateCustomerService = async (customer) => {
    let { id, title, description, published } = customer;
    try {
        const result = await Customer.updateOne({ _id: id }, { title, description, published }).exec();
        //console.log(result);
       return result;
    } catch (error) {
        //console.log("error từ updateTuturial", error);
        return "Error when update customer";
    }
}

const deleteCustomerService = async (nameOfObj) => {
    try {
        console.log(nameOfObj);
        const result = await Customer.deleteOne({name:nameOfObj});
        return result;
    } catch (error) {
        console.log(error);
        return "error when delete customer";
    }
}
module.exports = {createOneCustomerService,createArrayCustomerService,getAllCustomerService,updateCustomerService,deleteCustomerService};