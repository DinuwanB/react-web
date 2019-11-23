const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TravelPlacesSchema = new Schema({
    placeName   : { type: String, required : true},
    imageUrl    : { type: String, required : true},
    description : { type: String, required : true}
    
});

const TravelSchema = mongoose.model('TravelSchema', TravelPlacesSchema);

module.exports = TravelSchema; 