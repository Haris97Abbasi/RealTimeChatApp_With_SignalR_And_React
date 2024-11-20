import { Box, Typography } from "@mui/material";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";

const ChatRoom = ({ messages, sendMessage }) => (
  <Box mt={4}>
    <Typography variant="h5" gutterBottom>
      ChatRoom
    </Typography>
    <Box mt={2}>
      <MessageContainer messages={messages} />
    </Box>
    <Box mt={2}>
      <SendMessageForm sendMessage={sendMessage} />
    </Box>
  </Box>
);

export default ChatRoom;
