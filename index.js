require("dotenv").config();
const { WebhookClient } = require("discord.js");

const webhook = new WebhookClient({ url: process.env.DISCORD_HOOK });
webhook.send("整點報時").catch(console.error);
