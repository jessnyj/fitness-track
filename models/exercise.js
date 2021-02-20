const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: "Please select a type of exercise"
    },
    name: {
        type: String,
        trim: true,
    },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;