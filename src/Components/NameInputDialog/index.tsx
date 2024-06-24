import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch } from '../../Lib/Store/hooks';
import  { saveUserName } from '../../Lib/Slices/ChatRoomSlice';

interface NameInputDialogProps {
    open: boolean;
    handleClose: () => void;
}

const NameInputDialog = ({open, handleClose}: NameInputDialogProps) => {

  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <Dialog
        open={open}
        maxWidth="md"
        // onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const name = formJson.name;
            dispatch(saveUserName(name ?? "Unknown User"));
            handleClose();
          },
        }}
      >
        <DialogTitle>Let's start conversation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your name to get start.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Enter name"
            type="text"
            fullWidth
            variant="outlined"
            size='small'
          />
        </DialogContent>
        <DialogActions >
          <Button variant="text" color="error" onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">Start Now</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default NameInputDialog;