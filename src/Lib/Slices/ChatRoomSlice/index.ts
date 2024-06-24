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
        sendMessage: create.reducer((state) => {
            // This is where we would send the message to the server
        }),
        receiveMessage: create.reducer((state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        }),
        getMessage: create.reducer((state) => {
            
        })
    }),
    selectors:  {
        messages: (state) => state.messages
    }
})

export const { sendMessage, receiveMessage, getMessage } = chatRoomSlice.actions;
export const { messages } = chatRoomSlice.selectors;