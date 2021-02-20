const router = require("express").Router();
const Workout = require("../models/workout.js");

// Create Workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                completeDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
        // .sort({ day: 1 })
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body} },
        {new: true, runValidators: true},
        console.log(req.params.id)
    ).then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
    res.json(req.params.id);
});


router.get("api/workouts/range", (req, res) => {
    Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});



// router.get("api/workouts", (req, res) => {
//     res.json({ name: 'hello' });
// });





module.exports = router;