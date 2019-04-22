var mongoose = require('mongoose');

var schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
};

var ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true
    }
}, schemaOptions);

module.exports = mongoose.model('contact', ContactSchema);