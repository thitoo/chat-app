import { Container } from "@mui/material";
import { MessageInput, NameInputDialog } from "./Components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./Lib/Store/hooks";
import { messages, sendMessage } from './Lib/Slices/ChatRoomSlice';
import { Messages } from "./Components";

const App = () => {

  const [open, setOpen] = useState(true);

  const messageList = useAppSelector(messages)

  const dispatch = useAppDispatch();

  const handleMessage = (message: string) => {
    
  }


  return (
    <Container maxWidth="md" sx={{position: 'relative', height: '100vh'}}>
      <NameInputDialog open={open} handleClose={() => setOpen(false)}/>
      <Messages messages={messageList}/>
      <MessageInput />
    </Container>
  );
}

export default App;
