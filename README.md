# Real-Time Chat Application with ASP.NET Core Web API and React Frontend

Welcome to the **Real-Time Chat Application**, a cutting-edge communication platform built with an ASP.NET Core Web API backend and a React frontend. This project harnesses the power of **SignalR** to deliver real-time messaging and seamless communication for multiple users. Whether you're chatting in a group or joining a specific chat room, this app ensures a responsive and engaging user experience.

## Key Features

- **Real-Time Communication with SignalR**: Leveraging SignalR, this app provides instant messaging capabilities, allowing users to communicate in real time without any noticeable delays.
- **Group Chat Functionality**: Users can join different chat rooms or groups and communicate exclusively with members of those groups, creating a focused and collaborative environment.
- **Dynamic User Differentiation**: Each user is assigned a unique color for their messages, making it easy to visually distinguish between different participants in the chat.
- **Timestamped Messages**: Every message sent or received is timestamped, providing context and a historical record of conversations.
- **Multiple User Support**: The application supports multiple users joining simultaneously, with each user's messages displayed in real time to all participants in the same group or chat room.

![Screenshot of Application](/ChatMessages.PNG "Application Screenshot")

## Technologies Used

### Backend
- **ASP.NET Core Web API**: The robust and scalable API serves as the backend for this real-time application, managing user connections and data flow.
- **SignalR**: A Microsoft library used for adding real-time functionality to web applications, enabling live communication between the server and connected clients.

### Frontend
- **React**: A powerful JavaScript library for building user interfaces, providing a responsive and dynamic frontend experience.

## How It Works

### Real-Time Messaging with SignalR
- **Joining the Chat**: When a user joins, they can connect to either a global chat or a specific group (chat room). The backend registers the connection and announces the user’s entry to all members.
- **Group-Specific Communication**: Users can join specific chat rooms where they can exchange messages exclusively with other members of that room.
- **Dynamic User Handling**: The app dynamically assigns colors to each user's messages for easy differentiation and timestamps every message to provide context.
  
## Credit
This project was inspired by and built following tutorials and guidance from [Mohamad Lawand](https://github.com/mohamadlawand-patreon). Special thanks for providing invaluable resources and examples that helped shape this application.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org)
- [ASP.NET Core SDK](https://dotnet.microsoft.com/download)
- [React](https://reactjs.org)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/RealTimeChatApp.git
  
2. Navigate to the backend folder and run:
   ```bash
   dotnet restore
   dotnet run
  
3. Navigate to the frontend folder and run:
   ```bash
   npm install
   npm start
  
## Usage
- Open your browser and navigate to the specified localhost URL.
- Enter your username and join a chat room to start communicating in real time!

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

