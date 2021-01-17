
const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

module.exports = {
    name: "botinfo",
    category: "info",
  description: "Sends detailed info about the client",
  usage: "[command]",
  run: async (client, message, args) => {
    message.delete();
    
  //command
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const botinfo = new Discord.MessageEmbed()
          .setAuthor(client.user.username)
          .setTitle("__**Stats:**__")
          .setColor("RANDOM")
          .addField("📁 Users", `${client.users.cache.size}`, true)
          .addField("📁 Servers", `${client.guilds.cache.size}`, true)
          .addField("📁 Channels ", `${client.channels.cache.size}`, true)
          .addField("⌚️ Uptime ", `${duration}`, true)
          .addField("API Latency", `${(client.ws.ping)}ms`)  
      message.channel.send(botinfo)
  });
  }
  };