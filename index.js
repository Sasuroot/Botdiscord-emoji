const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./config.json").token

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag} :D`);
});

client.on("message", (msg) => {
  msg.guild.emojis.cache.map(async (emoji) => {
    if (msg.content === `:${emoji.name}:`) {
        msg.delete;
        const id = emoji.id;
        const name = emoji.name;
        const result = `<a:${name}:${id}>`
            const channel = client.channels.cache.get(msg.channel.id);
            try {
              const webhooks = await channel.fetchWebhooks();
              let webhook = webhooks.first();

              if (!webhook) {
                webhook = msg.channel.createWebhook(msg.author.username, msg.author.displayAvatarURL())
              }
    
              await webhook.send(result, {
                username: msg.author.username,
                avatarURL: msg.author.displayAvatarURL({ format: "png" }),
              });
            } catch (error) {
              msg.reply("Veillez réssayer cette commandes");
            }
    }
  });
});

client.login(token);
