const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String
    },
    name: {
        type: String,
        trim: true
    },
    
})