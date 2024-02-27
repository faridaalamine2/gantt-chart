import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
};

const dialogSlice = createSlice({
    name: "dialog",
    initialState,
    reducers: {
        openDialog: (_, action) => {
            const payload = action.payload;
            return { open: true, ...payload };
        },
        closeDialog: () => {
            return initialState;
        },
    },
});
export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
