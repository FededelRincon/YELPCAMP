const mongoose = require('mongoose');
const Schema = mongoose.Schema;  //esto es para abreviar cuando se creen (new schema) las tablas y para combinarlas

const reviewSchema = new Schema({
    body: String,
    rating: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Review", reviewSchema); //aca iba en singular xq mongoose la crea en plural