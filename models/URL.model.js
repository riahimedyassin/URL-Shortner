const mongoose= require("mongoose");

const urlSchema = mongoose.Schema({
    original: {
        type : String , 
        required : [true,"Original URL must be included"]
    }
})

module.exports=mongoose.model("URL",urlSchema)