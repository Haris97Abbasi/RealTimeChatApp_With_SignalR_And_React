using Microsoft.AspNetCore.SignalR;
using RealTimeChatApp.DataService;
using RealTimeChatApp.Models;

namespace RealTimeChatApp.Hubs;

public class ChatHub : Hub
{
    private readonly ShareDb _shared;

    public ChatHub(ShareDb shared)
    {
        _shared = shared;
    }

    /// This method is called when a user joins the chat
    public async Task JoinChat(UserConnection conn)
    {
        await Clients.All
            .SendAsync("ReceiveMessage", "admin", $"{conn.Username} has joined");
    }

    /// This method is called when a user joins a specific chat room
    public async Task JoinSpecificChatRoom(UserConnection conn)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, conn.ChatRoom);

        _shared.connections[Context.ConnectionId] = conn;

        await Clients.Group(conn.ChatRoom)
            .SendAsync("ReceiveSpecificMessage", "Admin", $"{conn.Username} has joined {conn.ChatRoom}");
    }

    /// This method is called when a user leaves a specific chat room
    public async Task SendMessage(string msg)
    {
        if (_shared.connections.TryGetValue(Context.ConnectionId, out UserConnection conn))
        {
            await Clients.Group(conn.ChatRoom)
                .SendAsync("ReceiveSpecificMessage", conn.Username, msg);
        }
    }
}