import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

const WaitingRoom = ({ joinChatRoom }) => {
  const [username, setUsername] = useState('');
  const [chatroom, setChatroom] = useState('');

  return (
    <Box
      component="form"
      onSubmit={e => {
        e.preventDefault();
        joinChatRoom(username, chatroom);
      }}
      sx={{ mt: 4 }}
    >
      <TextField
        fullWidth
        label="Username"
        variant="outlined"
        margin="normal"
        onChange={e => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        label="ChatRoom"
        variant="outlined"
        margin="normal"
        onChange={e => setChatroom(e.target.value)}
      />
      <Box mt={2}>
        <Button variant="contained" color="success" type="submit">
          Join
        </Button>
      </Box>
    </Box>
  );
};

export default WaitingRoom;
