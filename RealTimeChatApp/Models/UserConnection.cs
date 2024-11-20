using Microsoft.AspNetCore.Identity;

namespace RealTimeChatApp.Models
{
    /// <summary>
    /// This class represents a user connection
    /// </summary>
    public class UserConnection
    {
        public string Username { get; set; } = string.Empty;
        public string ChatRoom { get; set; } = string.Empty;
    }
}
