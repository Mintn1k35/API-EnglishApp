const word = require('../model/WordModel')

class UpdateController{

    
    //[post] update word by id
    update(req,res){
        word.updateOne({_id: req.params.id},req.body)
            .then((result)=>{
                res.send(true)
            })
            .catch((err)=>{
                res.send(false)
            })
    }
}

module.exports = new UpdateController;