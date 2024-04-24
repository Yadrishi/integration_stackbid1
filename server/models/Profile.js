const mongoose = require('mongoose');

//define profile schema/model
const profileSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,   //mandatory field
    },
    gender:{
        type:String
    },
    mobile: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});


const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
