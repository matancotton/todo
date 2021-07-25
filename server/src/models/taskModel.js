const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        body: {
            type: String,
            trim: true,
            required: true,
        },
        isDone: {
            type: Boolean,
            requierd: true,
        },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
