const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
    id_company:{
        type: String,
        require: true
    },
    name_company:{
        type: String,
        require: true
    }
});

const workSchema = mongoose.Schema({
    id_work: {
        type: String,
        require: true,
    },
    name_work: {
        type: String,
        require: true,
    },
    company: [CompanySchema],
});

const addresSchema = mongoose.Schema({
    zip_code: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    municipality: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true
    }
});



const UserSchema = mongoose.Schema({
    firstname : {
        type: String,
        require: true,
    },
    lastname : {
        type: String,
        require: true,
    },
    pets: {
        type: Array,
        default: []
    },
    addres:[addresSchema],
    work: [workSchema],
});
const User =  mongoose.model("User",UserSchema);
module.exports = User;
