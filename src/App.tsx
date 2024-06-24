import { Container } from "@mui/material";
import { NameInputDialog } from "./Components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./Lib/Store/hooks";
import { messages, sendMessage } from './Lib/Slices/ChatRoomSlice';
import Messages from "./Components/Messages";

const App = () => {

  const [open, setOpen] = useState(true);

  const messageList = useAppSelector(messages)

  const dispatch = useAppDispatch();


  return (
    <Container maxWidth="md">
      <NameInputDialog open={open} handleClose={() => setOpen(false)}/>
      <Messages messages={messageList}/>
    </Container>
  );
}

export default App;
