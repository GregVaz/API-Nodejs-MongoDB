const mongoose = require("mongoose");

let placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    photoUrl: {
        type: String,
        required: true
            //match:
    }
});

const placeModel = mongoose.model('PlaceSchema', placeSchema, 'place');
//nombre del esquema, variable del esquema decalrado, y como se encontrara dentro de mongo

module.exports = placeModel;