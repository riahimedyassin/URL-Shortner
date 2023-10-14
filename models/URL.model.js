const mongoose= require("mongoose");

const urlSchema = mongoose.Schema({
    original: {
        type : String , 
        required : [true,"Original URL must be included"]
    },
    hashed : {
        type: String , 
        required : [true,'Hashed Value is Required']
    }
})

module.exports=mongoose.model("URL",urlSchema)