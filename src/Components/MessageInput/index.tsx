import { Box, Icon, IconButton, InputAdornment, TextField } from "@mui/material";
import { Send } from '@mui/icons-material';
import { useState } from "react";

interface MessageInputProps {

    sendMessage: (message: string) => void;

}

const MessageInput = ({ sendMessage }: MessageInputProps) => {

    const [message, setMessage] = useState<null | string>()

    const handleTypeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setMessage(e.target.value)
    }

    const handleSendMessage = () => {
        if (message) {
            sendMessage(message)
            setMessage(null)
        }
    }

    return <Box position={'absolute'} bottom={24} left={0} right={0} >
        <TextField
            value={message ?? ""}
            fullWidth
            autoFocus
            type="text"
            placeholder="Type a message..."
            variant="outlined"
            size="small"
            onChange={handleTypeMessage}
            InputProps={{
                endAdornment: Boolean(message) && <InputAdornment position="end"> <IconButton onClick={handleSendMessage} ><Send /></IconButton> </InputAdornment>
            }}
        />
    </Box>
}

export default MessageInput;