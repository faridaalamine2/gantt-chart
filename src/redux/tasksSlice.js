import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 0,
        projectId: 0,
        title: "task 1",
        startDate: "2024-02-25",
        endDate: "2024-03-01",
        duration: 5,
        color: "#d12cc6",
    },
    {
        id: 1,
        projectId: 0,
        title: "task 2",
        startDate: "2024-02-25",
        endDate: "2024-03-01",
        duration: 5,
        color: "#90fa66",
    },
    {
        id: 2,
        projectId: 1,
        title: "task 3",
        startDate: "2024-02-25",
        endDate: "2024-03-01",
        duration: 5,
        color: "#747ffc",
    },
];
const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: nanoid(),
                ...action.payload,
            };
            state.push(newTask);
        },
        editTask: (state, action) => {
            const editedTask = action.payload;
            const newState = state.map((task) => {
                if (task.id === editedTask.id) {
                    return (task = editedTask);
                } else return task;
            });
            return newState;
        },
        deleteTask: (state, action) => {
            const deleteId = action.payload.id;
            const newState = state.filter((task) => {
                return task.id !== deleteId;
            });
            return newState;
        },
    },
});
export const filterTasksByProject = (state, projectId) => {
    return state.filter((task) => task.projectId === projectId);
};
export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
