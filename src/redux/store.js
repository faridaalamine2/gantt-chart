import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import currentProjectReducer from "./currentProject";
import dialogReducer from "./dialogSlice";
import tasksReducer from "./tasksSlice";
export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        currentProject: currentProjectReducer,
        tasks: tasksReducer,
        dialog: dialogReducer,
    },
});
