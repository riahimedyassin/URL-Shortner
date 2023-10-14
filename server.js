const express = require("express")
const app = express();
const {connect} = require("./config/connect")
require('dotenv').config()
const PORT= process.env.PORT
const CONNECTION_STRING = process.env.CONNECTION_STRING
const {router} = require("./routes/URL.route");
const { errorHandler } = require("./middleware/errorHandler");



app.use(express.static("public"))
app.use(express.json())
app.use("/",router)
app.use(errorHandler)



const start=async () => {
    try {
        await connect(CONNECTION_STRING)
        app.listen(PORT,()=> {
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()