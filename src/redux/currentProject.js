import { createSlice } from "@reduxjs/toolkit";
const currentProject = JSON.parse(localStorage.getItem("currentProject"));
const initialState = {
    project: currentProject
        ? currentProject
        : {
              id: 0,
              title: "project 1",
              startDate: "2024-02-20",
              endDate: "2024-04-11",
              duration: 50,
          },
};

const currentProjectSlice = createSlice({
    name: "currentProject",
    initialState,
    reducers: {
        openProject: (state, action) => {
            const project = action.payload;
            state.project = project;
            localStorage.setItem("currentProject", JSON.stringify(project));
        },
    },
});
export const { openProject } = currentProjectSlice.actions;
export default currentProjectSlice.reducer;
