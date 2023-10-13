const router = require("express").Router()
const {setURL, redirictURL} = require("../controllers/URL.controller")


router.post("/seturl",setURL)
router.get("/:id",redirictURL)


module.exports={router}