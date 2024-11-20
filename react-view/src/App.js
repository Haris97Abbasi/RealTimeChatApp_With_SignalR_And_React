import { Container, Typography } from '@mui/material';
import './App.css';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import WaitingRoom from './components/waitingroom';
import ChatRoom from './components/ChatRoom';

function App() {
  const [conn, setConnection] = useState();
  const [messages, setMessages] = useState([]);

  const joinChatRoom = async (username, chatroom) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("https://localhost:59939/chat")
        .configureLogging(LogLevel.Information)
        .build();

      conn.on("JoinSpecificChatRoom", (username, msg) => {
        console.log("msg: ", msg);
      });

      conn.on("ReceiveSpecificMessage", (username, msg) => {
        console.log("msg:" + msg + " username " + username);
        const newMessage = {
          username,
          msg,
          timestamp: new Date().toLocaleTimeString(), // Capture the timestamp when the message is received
        };
        setMessages(messages => [...messages, newMessage]);
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatroom });

      setConnection(conn);
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessage = async(message) => {
    try {
      await conn.invoke("SendMessage", message);
    } catch (e){
      console.log(e);
    }
  }

  return (
    <div>
      <main>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to the Real-Time ChatApp
          </Typography>
          { !conn  
            ? <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
            : <ChatRoom messages={messages} sendMessage={sendMessage}></ChatRoom>
          }
        </Container>
      </main>
    </div>
  );
}

export default App;
