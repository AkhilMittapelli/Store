using API.Middleware;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql;
using Store.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure the DbContext
builder.Services.AddDbContext<StoreContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("MyConnection");
    var serverVersion = new MySqlServerVersion(new Version(8, 0, 21)); 
    options.UseMySql(connectionString, serverVersion);
});

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();
app.UseMiddleware<ExceptionMiddleware>();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Use the CORS policy
app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Seeding data and handling migrations
var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>(); 

try
{
    context.Database.Migrate();
    Seedingdata.planting(context);
}
catch (Exception ex)
{
    logger.LogError(ex, "A problem occurred during migration");
}

app.Run();
