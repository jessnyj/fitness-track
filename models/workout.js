const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date
    }, 
    exercise: {
        type: String
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;