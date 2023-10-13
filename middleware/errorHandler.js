const { CustomError } = require("../errors/custom/customError");



const errorHandler=(err,req,res,next) => {
    if(!err) next()
    if(err instanceof CustomError ) {
        console.log("YEEEEEEEEEES")
        res.status(err.status).json({
            message : err.message,
            status : err.status
        })
    }
    else {
        res.status(500).json({message:"Server Error",status : 500})
    }
}

module.exports={errorHandler}