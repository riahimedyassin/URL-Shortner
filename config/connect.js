const mongoose = require("mongoose");


const connect = async(string) => {
    try {
        const connection = await mongoose.connect(string)
        if(connection) console.log("Connected Successfully to DB")
    } catch (error) {
        throw new Error(error)
    }
}

module.exports={connect}