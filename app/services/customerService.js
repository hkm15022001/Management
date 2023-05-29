const Customer = require("../models/customer.model");
const aqp = require("api-query-params");
const createOneCustomerService = async(customer) => {
    try{
        const result = await Customer.create(customer).exec() ;
        return result;
    } catch(error){
        return error;
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
        return error;
    }

}

const updateCustomerService = async (customer) => {
    let { id, title, description, published } = customer;
    try {
        const result = await Tuturial.updateOne({ _id: id }, { title, description, published }).exec();
        //console.log(result);
       return result;
    } catch (error) {
        //console.log("error từ updateTuturial", error);
        return "Error when update customer";
    }
}
module.exports = {createOneCustomerService,createArrayCustomerService,getAllCustomerService,updateCustomerService};