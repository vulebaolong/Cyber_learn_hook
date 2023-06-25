import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listMessage: [],
};

const appChat = createSlice({
    name: "appChat",
    initialState,
    reducers: {
        addMessage: (state, { type, payload }) => {},
    },
});

export const { addMessage } = appChat.actions;

export default appChat.reducer;
