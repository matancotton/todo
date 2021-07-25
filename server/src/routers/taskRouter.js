const express = require("express");
const Task = require("../models/taskModel");

const router = new express.Router();

router.get("/tasks/all", async (req, res) => {
    try {
        const tasks = await Task.find({});
        if (!tasks)
            return res.status(404).send({ error: "No tasks available" });
        res.send(tasks);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

router.put("/tasks/new", async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.send(task);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

router.patch("/tasks/update", async (req, res) => {
    const _id = req.query.id;
    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!task) return res.status(400).send({ error: "task not found" });
        res.send(task);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

router.delete("/tasks/delete", async (req, res) => {
    const _id = req.query.id;
    try {
        const task = await Task.findByIdAndDelete(_id);
        if (!task) return res.status(400).send({ error: "task not found" });
        res.send(task);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

module.exports = router;
