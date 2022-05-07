const word = require('../model/WordModel')

class InsertController{


    index(req,res){
        const newWord = new word(req.body)
        newWord.save()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.send(err);
        });
    }

    uploadFile(req,res){
        const file=req.file;
        // console.log(file);
        if(file){
            let address=file.path;
            let response=`http://localhost:3000/${address.slice(address.search('img'),address.length)}`;
            res.send(JSON.stringify(response));
        }
        else res.send(false);
    }
}

module.exports = new InsertController