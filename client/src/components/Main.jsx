import React from "react";
import TaskForm from "./TaskForm";
import AllTasks from "./AllTasks";
import TaskContextProvider from "../contexts/TaskContext";
import TasksCounter from "./TasksCounter";

const Main = () => {
    return (
        <div className="main">
            <TaskContextProvider>
                <TasksCounter />
                <AllTasks />
                <TaskForm />
            </TaskContextProvider>
        </div>
    );
};

export default Main;
