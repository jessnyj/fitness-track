const router = require("express").Router();
const db = require("../models");


// Create Workout
router.post("/api/workouts/", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("api/workouts", (req, res) => {
    db.Workout.find({})
        .sort({ date: 1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});













module.exports = router;