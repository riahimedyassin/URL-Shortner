class CustomError extends Error {
    status = 500 
    constructor(message,status) {
        super(message),
        this.status = status 
    }
}

const createError = (message,status) => new CustomError(message,status)

module.exports={createError, CustomError}