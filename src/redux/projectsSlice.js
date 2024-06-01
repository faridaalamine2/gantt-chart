import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    projects: [
        {
            id: 0,
            title: "project 1",
            startDate: "2024-05-30",
            endDate: "2024-07-31",
            duration: 62,
        },
        {
            id: 1,
            title: "project 2",
            startDate: "2024-02-20",
            endDate: "2024-07-31",
            duration: 62,
        },
    ],
};
const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        addProject: (state, action) => {
            const newProject = { id: nanoid(), ...action.payload };
            state.projects.push(newProject);
        },
        editProject: (state, action) => {
            const editedProject = action.payload;
            const newProjects = state.projects.map((project) => {
                if (project.id === editedProject.id) {
                    return editedProject;
                } else return project;
            });
            state.projects = newProjects;
        },
        deleteProject: (state, action) => {
            const deleteId = action.payload.id;
            const newProjects = state.projects.filter(
                (project) => project.id !== deleteId
            );
            state.projects = newProjects;
        },
    },
});
export const { addProject, editProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;
