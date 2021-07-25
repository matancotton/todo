import React, { useContext, useEffect, useState } from "react";
import { deleteTaskAction, toggleTaskAction } from "../actions/taskActions";
import { TaskContext } from "../contexts/TaskContext";
import { deleteTaskInDB, updateTaskInDB } from "../server/api";
import Button from "./Button";

const Task = ({ task }) => {
    const { tasksState, tasksDispatch } = useContext(TaskContext);
    const [taskClass, setTaskClass] = useState("");

    const onCheck = () => {
        updateTaskInDB(task._id, { isDone: !task.isDone })
            .then(() => {
                console.log("task updated in db");
            })
            .catch((err) => {
                console.log(err);
            });
        tasksDispatch(toggleTaskAction(task._id));
    };

    const onDeleteClick = () => {
        deleteTaskInDB(task._id)
            .then(() => {
                console.log("task deleted in db");
            })
            .catch((err) => {
                console.log(err);
            });
        tasksDispatch(deleteTaskAction(task._id));
    };

    useEffect(() => {
        if (!task.isDone) {
            setTaskClass("");
        } else {
            setTaskClass("done");
        }
    }, [tasksState, task]);
    return (
        <div className="task">
            <div className="task-details">
                <input
                    type="checkbox"
                    onChange={onCheck}
                    checked={task.isDone}
                />
                <div className={taskClass}>{task.body}</div>
            </div>
            <Button
                func={onDeleteClick}
                background="red"
                color="white"
                text="delete"
            />
        </div>
    );
};

export default Task;
