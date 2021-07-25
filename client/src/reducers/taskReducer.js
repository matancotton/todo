export const initalState = [];

const taskReducer = (state, action) => {
    switch (action.type) {
        case "SET_TASKS":
            return action.tasks;
        case "ADD_TASK":
            return [...state, action.task];
        case "TOGGLE_FINISHED":
            const tasks = [...state];
            const task = tasks.find((task) => task._id === action._id);
            task.isDone = !task.isDone;
            return tasks;
        case "DELETE_TASK":
            let NewTasks = [...state];
            NewTasks = NewTasks.filter((task) => task._id !== action._id);
            return NewTasks;
        default:
            return [...state];
    }
};

export default taskReducer;
