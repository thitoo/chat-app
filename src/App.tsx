import { Container } from "@mui/material";
import { MessageInput, NameInputDialog } from "./Components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./Lib/Store/hooks";
import { messages, sendMessage } from './Lib/Slices/ChatRoomSlice';
import { Messages } from "./Components";
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const user_name = useAppSelector(state => state.messageCenter.user_name)
  
  const [open, setOpen] = useState(!Boolean(user_name));

  const messageList = useAppSelector(messages)

  const dispatch = useAppDispatch();

  const handleMessage = (message: string) => {
    dispatch(sendMessage({
      id: uuidv4(),
      user: user_name ?? "Unknown User",
      message: message,
      timestamp: new Date().toISOString(),
      isIncoming: false
    }))
  }


  return (
    <Container maxWidth="md" sx={{position: 'relative', height: '100vh'}}>
      <NameInputDialog open={open} handleClose={() => setOpen(false)}/>
      <Messages messages={messageList}/>
      <MessageInput sendMessage={handleMessage}/>
    </Container>
  );
}

export default App;
