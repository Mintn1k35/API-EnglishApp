const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const word = new Schema({
    word: {type: String,default: ''},
    mean: {type: String, default: ''},
    type: {type: String,default: '*'},
    imgLink: {type: String, default: ''},
    example: {type: String,default: ''}

},{
    timestamps: true,
});


module.exports = mongoose.model('words', word);