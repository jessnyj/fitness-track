const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});














module.exports = router;