const mongoose = require("mongoose");

const workSchema = mongoose.Schema({
    id_work: {
        type: String,
        require: true,
    },
    name_work: {
        type: String,
        require: true,
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
    document_number : {
        type: String,
        require: true,
        unique:true,
    },
    type_document : {
        type: String,
        require: true,
    },
    work: [workSchema],
    create_at : {
        type: Date,
        default: Date.now
    }
});
const User =  mongoose.model("User",UserSchema);
module.exports = User;
