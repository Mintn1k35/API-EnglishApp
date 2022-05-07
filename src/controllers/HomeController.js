const word = require('../model/WordModel')

class HomeController{


    index(req,res){
        word.find({})
            .then((data)=>{
                res.send(data)
            })
            .catch((error)=>{
                res.send(error)
            })
    }
}

module.exports = new HomeController;