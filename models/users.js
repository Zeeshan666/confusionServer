const mongoose = require("mongoose");
const Schemea = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var passport = require('passport');
const User = new Schemea({
    admin:   {
        type: Boolean,
        default: false
    }
},{
    timestamps:true
});
User.plugin(passportLocalMongoose)
module.exports=mongoose.model('User',User)