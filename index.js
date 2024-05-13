const { Client, Intents } = require("discord.js"); // Import the necessary modules from discord.js
const express = require("express"); // Import express module for server setup
const app = express();
const port = 3001; // Port for the server to listen on


// Setup a route for the server
app.get("/", (req, res) => {
  console.log(Date.now() + " Ping Received");
  res.send("Hello World!");
});


// Start the server
app.listen(port, () =>
  console.log(`Our bot is running at http://localhost:${port}`)
);


// Initialize the bot with necessary intents
const prefix = "!bot";
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});


// Event listener for when the bot is ready
client.on("ready", () => {
  console.log("Bot is ready"); // indicates that bot is ready to receive commands
});


// Event listener for messages
client.on("messageCreate", (message) => { // listens on every message created on the server
  const { content } = message;

  
  // Check if the message starts with the bot's prefix
  if (content.startsWith(prefix)) { 
    const commandParts = content.split(" "); // ["!bot", "ping"]
    const target = commandParts[1]; // "ping"

    
    // Handle commands
    switch (target) {
      case "ping":
        message.reply("pong");
        break;
    }
  }
});


// Login the bot using the token
const DISCORD_TOKEN = ''; // paste the token here
client.login(DISCORD_TOKEN);
