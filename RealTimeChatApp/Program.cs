using RealTimeChatApp.DataService;
using RealTimeChatApp.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSignalR();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name: "reactApp", configurePolicy: builder =>
    {
        builder.WithOrigins("http://localhost:3000") 
               .AllowAnyHeader()
               .AllowAnyMethod()
               .AllowCredentials();
    });
});

builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<ShareDb>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting(); 

app.UseCors("reactApp");

app.UseAuthorization();
app.MapControllers();

app.MapHub<ChatHub>("/chat"); 

app.Run();
