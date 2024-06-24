import { Message } from "@/types/message";
import { createAppSlice } from "../createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface MessageState {
    user_name: string | null;
    messages: Message[];
}

const initialState: MessageState = {
    user_name: null,
    messages: [{
        id: uuidv4(),
        user: "John Doe",
        message: "Hello, World!",
        timestamp: new Date().toISOString(),
        isIncoming: true,
    }]
}

export const chatRoomSlice = createAppSlice({
    name: "messageCenter",
    initialState,
    reducers: (create) => ({
        saveUserName: create.reducer((state, action: PayloadAction<string>) => {
            state.user_name = action.payload;
        }),
        sendMessage: create.reducer(( state , action: PayloadAction<Message>) => {
            // This is where we woulds send the message to the server
            state.messages.push(action.payload);
        }),
        receiveMessage: create.reducer((state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        }),
        getMessage: create.reducer((state) => {
            
        })
    }),
    selectors:  {
        messages: (state) => state.messages,
        user_name: (state) => state.user_name,
    }
})

export const { sendMessage, receiveMessage, getMessage, saveUserName } = chatRoomSlice.actions;
export const { messages, user_name } = chatRoomSlice.selectors;

export default chatRoomSlice.reducer