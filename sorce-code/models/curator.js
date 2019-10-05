const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const curatorSchema = new Schema({
    nome: {
        type: String, 
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        minlength: 1,
        maxlength: 250
    },
    rate: {
        type: Number,
        default: 0
    },
    favoriteGenres: {
        type: Array,
        enum: [
            "comedy",
            "sci-fi",
            "horror",
            "romance",
            "action",
            "thriller",
            "drama",
            "mystery",
            "crime",
            "animation",
            "adventure",
            "fantasy"
        ],
        minlength: 1,
        maxlength: 3,
    }
}, {
  timestamps: true
})

const Curator = mongoose.model("Curator", curatorSchema);
module.exports = Curator;