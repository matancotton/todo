import React, { useContext, useMemo } from "react";
import { TaskContext } from "../contexts/TaskContext";

const TasksCounter = () => {
    const { tasksState } = useContext(TaskContext);
    const workingTasks = useMemo(() => {
        const runningTasks = tasksState.filter((task) => !task.isDone);
        return runningTasks.length;
    }, [tasksState]);
    return (
        <div className="tasks-counter">
            <div>Total running Tasks</div>
            <div>{workingTasks}</div>
        </div>
    );
};

export default TasksCounter;
