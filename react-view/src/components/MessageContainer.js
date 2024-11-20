import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const generateColor = (index) => {
  // Define a set of light colors suitable for a dark theme
  const colors = [
    '#FFD700', '#00FA9A', '#ADD8E6', '#FF69B4', '#FFA07A',
    '#7FFFD4', '#FFFACD', '#D8BFD8', '#00CED1', '#F0E68C'
  ];
  return colors[index % colors.length];
};

const MessageContainer = ({ messages }) => {
  const [userColors, setUserColors] = useState({});

  useEffect(() => {
    const uniqueUsers = [...new Set(messages.map(msg => msg.username))];
    const newUserColors = { ...userColors };

    uniqueUsers.forEach((user, index) => {
      if (!newUserColors[user]) {
        newUserColors[user] = generateColor(Object.keys(newUserColors).length);
      }
    });

    setUserColors(newUserColors);
  }, [messages, userColors]);

  return (
    <Box>
      {messages.map((msg, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: msg.username === 'LoggedInUser' ? 'flex-end' : 'flex-start',
            mb: 1,
          }}
        >
          <Box
            sx={{
              maxWidth: '60%',
              padding: '10px',
              borderRadius: '15px',
              backgroundColor: msg.username === 'LoggedInUser' ? '#DCF8C6' : '#2E2E2E',
              color: '#FFFFFF', // White text for better visibility on a dark background
              wordBreak: 'break-word',
            }}
          >
            <Typography variant="body2" sx={{ color: userColors[msg.username] || '#FFFFFF', fontWeight: 'bold' }}>
              {msg.username}
            </Typography>
            <Typography variant="body1">{msg.msg}</Typography>
            <Typography variant="caption" sx={{ display: 'block', textAlign: 'right', color: '#aaa' }}>
              {msg.timestamp} {/* Display the timestamp stored with the message */}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MessageContainer;
