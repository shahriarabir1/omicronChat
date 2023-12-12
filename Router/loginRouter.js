const express=require("express")

const {getLogin} =require("../Controller/loginController.js")

const router=express.Router()

router.get("/",getLogin)

module.exports=router;