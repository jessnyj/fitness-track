const router = require("express").Router();
// const Workout = require("../models/workout.js");
const db = require("../models");

// Create Workout
router.post("/api/workouts/:id", ({body}, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});














module.exports = router;