const mongoose = require("mongoose");
const Schemea = mongoose.Schema;

const User = new Schemea({

    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
         unique:true,
        required:true
    },admin:{
        type:Boolean,
        required:true
    }

},{
    timestamps:true
});

module.exports=mongoose.model('User',User)