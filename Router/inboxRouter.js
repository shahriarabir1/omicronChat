const express=require("express")

const {getInbox} =require("../Controller/inboxController.js")

const router=express.Router()

router.get("/",getInbox)

module.exports=router;