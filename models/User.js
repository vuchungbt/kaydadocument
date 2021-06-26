const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creat UserSchema
const UserSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    fullname: {
        type: String,
    },
    email: {
        type: String,
    },
    dob: {
        type: Date,
    },
    picture: {
        type: String,
    },
    gender: {
        type: String,
    },
    facebook_id: {
        type: String,
    },
    google_id: {
        type: String,
    }
});

module.exports = User = mongoose.model("user", UserSchema);