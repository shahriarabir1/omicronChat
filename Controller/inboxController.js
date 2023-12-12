function getInbox(req,res,next){
    res.render("inbox",{
        title:"Chat || Fun || Plan"
    })
}
module.exports={getInbox}