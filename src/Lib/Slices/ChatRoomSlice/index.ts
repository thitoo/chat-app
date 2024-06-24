import { Message } from "@/types/message";
import { createAppSlice } from "../createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface MessageState {
    messages: Message[];
}

const initialState: MessageState = {
    messages: [{
        id: uuidv4(),
        user: "John Doe",
        message: "Hello, World!",
        timestamp: new Date().toISOString(),
    }]
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