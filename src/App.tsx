import { Container, Typography } from "@mui/material";
import { MessageInput, NameInputDialog } from "./Components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./Lib/Store/hooks";
import { messages, sendMessage } from './Lib/Slices/ChatRoomSlice';
import { Messages } from "./Components";
import { v4 as uuidv4 } from 'uuid';
import { broadcast } from "./Lib/Broadcast";

const App = () => {

  const [currentUser, setCurrentUser] = useState<string | null>(null)
  
  const [open, setOpen] = useState(!Boolean(currentUser));

  const messageList = useAppSelector(messages)

  const dispatch = useAppDispatch();

  const handleMessage = (message: string) => {

    const data = {
      id: uuidv4(),
      user: currentUser ?? "Unknown User",
      message: message,
      timestamp: new Date().toISOString(),
      isIncoming: false
    }

    dispatch(sendMessage(data))
    broadcast.postMessage(data)

  }
  const showNameInput = open && !Boolean(currentUser);

  return (
    <Container maxWidth="md">
      <Typography sx={{position: 'sticky', top: 0}} variant="h3" fontWeight={"700"}>{`Messages (${currentUser ?? "Unknown User"})`}</Typography>
      <NameInputDialog open={showNameInput} handleClose={() => setOpen(false)} handleUsername={(user_name) => setCurrentUser(user_name ?? "Unknown User")}/>
      <Messages messages={messageList}/>
      <MessageInput sendMessage={handleMessage}/>
    </Container>
  );
}

export default App;
