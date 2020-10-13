const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date()
  }, 
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter the exercise"
  },
  sets: {
    type: Number,
    required: "Enter the amount of sets "
  },
  reps: {
    type: Number,
    required: "Enter the amount of of reps"
  },
  weight: {
    type: Number,
    required: "Enter the weight"
    },
    duration: {
    type: Number,
  }
}
]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;