const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://mintn1k35:Min10032002@cluster0.l9yxq.mongodb.net/EnglishApp?retryWrites=true&w=majority');
        console.log("Successfull");
    } catch (error) {
        console.log("Fail");
    }
}

module.exports = {connect}