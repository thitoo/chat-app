import { Message } from "@/types/message";
import { createAppSlice } from "../createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export interface MessageState {
    messages: Message[];
}

const initialState: MessageState = {
    messages: []
}

export const chatRoomSlice = createAppSlice({
    name: "messageCenter",
    initialState,
    reducers: (create) => ({
        loadState: create.reducer((state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        }),
        sendMessage: create.reducer(( state , action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        })
    }),
    selectors:  {
        messages: (state) => state.messages,
    }
})

export const { sendMessage } = chatRoomSlice.actions;
export const { messages } = chatRoomSlice.selectors;

export default chatRoomSlice.reducer