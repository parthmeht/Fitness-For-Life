var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    itemCode: {
        type: Number,
        required: true,
        trim: true
    },
    itemName: {
        type: String,
        required: true,
        trim: true
    },
    catalogCategory: String,
    descriptionTitle: [String],
    description: [String],
    nutritionFactsImage: String,
    rating: Number,
    imageURL: String
});

module.exports = mongoose.model('items', ItemSchema);