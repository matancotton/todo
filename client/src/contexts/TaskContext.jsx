import React, { createContext, useEffect, useReducer } from "react";
import { setTasksAction } from "../actions/taskActions";
import taskReducer, { initalState } from "../reducers/taskReducer";
import { getTasks } from "../server/api";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasksState, tasksDispatch] = useReducer(taskReducer, initalState);

    useEffect(() => {
        getTasks()
            .then((tasks) => {
                tasksDispatch(setTasksAction(tasks));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <TaskContext.Provider value={{ tasksState, tasksDispatch }}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;
