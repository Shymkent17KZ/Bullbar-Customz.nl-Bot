require("dotenv").config()
const { ActivityType } = require("discord.js")
const { Client } = require("discord.js")

const client = new Client({intents:[]})

client.once("ready", () => {
    console.log(`Ready! Logged in as ${client.user.tag}! I'm on ${client.guilds.cache.size} guild(s)!`)
    client.user.setActivity({
        name: "Cooming Soon",
        type: ActivityType.Streaming,
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    })
})


client.login(process.env.DISCORD_BOT_TOKEN)