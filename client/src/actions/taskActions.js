export const addTaskAction = (task) => ({
    type: "ADD_TASK",
    task,
});

export const setTasksAction = (tasks) => ({
    type: "SET_TASKS",
    tasks,
});

export const toggleTaskAction = (_id) => ({
    type: "TOGGLE_FINISHED",
    _id,
});

export const deleteTaskAction = (_id) => ({
    type: "DELETE_TASK",
    _id,
});
