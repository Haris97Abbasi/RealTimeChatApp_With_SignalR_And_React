import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

const SendMessageForm = ({ sendMessage }) => {
  const [msg, setMessage] = useState('');

  return (
    <Box
      component="form"
      onSubmit={e => {
        e.preventDefault();
        sendMessage(msg);
        setMessage('');
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        label="Please type a message."
        value={msg}
        onChange={e => setMessage(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </Box>
  );
};

export default SendMessageForm;
