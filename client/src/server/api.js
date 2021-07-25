import axios from "axios";
const url = "http://localhost:4000/";

export const getTasks = async () => {
    try {
        const { data } = await axios.get(url + "tasks/all");
        return data;
    } catch (err) {
        throw err;
    }
};

export const addTaskToDB = async (task) => {
    try {
        const { data } = await axios.put(url + "tasks/new", task);
        return data;
    } catch (err) {
        throw err;
    }
};

export const updateTaskInDB = async (id, updates) => {
    try {
        const { data } = await axios.patch(url + "tasks/update", updates, {
            params: {
                id,
            },
        });
        return data;
    } catch (err) {
        throw err;
    }
};

export const deleteTaskInDB = async (id) => {
    try {
        const result = await axios.delete(url + "tasks/delete", {
            params: { id },
        });
        return result;
    } catch (err) {
        throw err;
    }
};
