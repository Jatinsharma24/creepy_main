const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=788735074647670815&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY 🐰 Bunny 🐰#6229`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}