const mongoose = require('mongoose');
const Review = require('./review'); //necesito esto para el delete
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'     //esto lo saca de la tabla de review
        }
    ]
});

//esto funciona xq hay en app.js esta (linea 109 aprox) 
    //await Review.findByIdAndDelete(reviewId);
//q nos trae el findByIdAndDelete(id) que es el que se usa con el _id
//y como es un middleware, solo va a funcionar cuando se llame a esta funcion
CampgroundSchema.post('findOneAndDelete', async function(doc) {
    if(doc){
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema);