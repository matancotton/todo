import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Task from "./Task";

const AllTasks = () => {
    const { tasksState } = useContext(TaskContext);
    return (
        <div className="all-tasks">
            {tasksState.length > 0 ? (
                <div>
                    {tasksState.map((task) => (
                        <Task key={task._id} task={task} />
                    ))}
                </div>
            ) : (
                <div>Your list is empty</div>
            )}
        </div>
    );
};

export default AllTasks;
