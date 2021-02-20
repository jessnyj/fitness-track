const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please select a type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter the name of your exercise"
            },
            duration: {
                type: Number,
                required: "Enter the duration of your workout"
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
            },
        },
    ],
    totalWorkoutDuration: {
        type: Number
    },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;