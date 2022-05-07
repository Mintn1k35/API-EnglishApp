const word = require('../model/WordModel')

class DetailController{

    
    //[GET] take word by id
    getWordById(req,res){
        word.findOne({_id: req.params.id})
            .then((result)=>{
                if(result){
                    res.send(result)
                }
                else {
                    res.send(
                        "Not found"
                    )
                }
            })
            .catch((err)=>{
                res.send("err");
            })
    }
}

module.exports = new DetailController;