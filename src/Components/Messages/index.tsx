import { Fragment } from "react";
import { Message } from "@/types/message";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

interface MessagesProps {
    readonly messages: Message[];
}

const Messages = ({ messages }: MessagesProps) => {
    return (
        <Fragment>
           
            <List  sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'hidden' }}>
                {
                    messages.map((message) => {
                        return (
                            <Fragment key={message.id}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt={message.user} src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={message.user}
                                        secondary={message.message}
                                    />
                                    <Typography variant="caption" color={'GrayText'}>{new Date(message.timestamp).toLocaleString()}</Typography>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </Fragment>
                        );
                    })
                }
            </List>
        </Fragment>
    )
}

export default Messages;