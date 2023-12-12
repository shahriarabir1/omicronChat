function getLogin(req,res,next){
    res.render("index",{
        title:"Login-Omicron-Chat"
    })
}



module.exports={getLogin}