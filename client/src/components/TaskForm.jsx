import React, { useState, useContext } from "react";
import { setTasksAction } from "../actions/taskActions";
import { TaskContext } from "../contexts/TaskContext";
import { addTaskToDB, getTasks } from "../server/api";
import Button from "./Button";

const TaskForm = () => {
    const { tasksDispatch } = useContext(TaskContext);
    const [text, setText] = useState("");
    const [textError, setTextError] = useState("");
    const [validInput, setValidInput] = useState(false);

    const onInputText = (e) => {
        const value = e.target.value;
        if (value !== "") {
            setValidInput(true);
            setTextError("");
        } else {
            setValidInput(false);
            setTextError("input must not be empty");
        }
        setText(value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (validInput) {
            addTaskToDB({ body: text, isDone: false })
                .then(() => {
                    getTasks().then((tasks) => {
                        tasksDispatch(setTasksAction(tasks));
                        setText("");
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <form onSubmit={onFormSubmit} className="form">
            <div className="input-container">
                <input
                    className="text"
                    type="text"
                    value={text}
                    placeholder="please type a task"
                    onInput={onInputText}
                />
                {textError !== "" && <div className="error">{textError}</div>}
            </div>
            <Button
                color="#fff"
                text="submit"
                background="blue"
                func={() => {}}
            />
        </form>
    );
};

export default TaskForm;
