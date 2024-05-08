const { command, isPrivate } = require("../../lib/");
const { banUser, unbanUser, isBanned } = require("../database/ban");
command(
  {
    on: "message",
    fromMe: isPrivate,
    dontAddCommandList: true,
  },
  async (message, match) => {
    if (!message.isBaileys) return;
    const isban = await isBanned(message.jid);
    if (!isban) return;
    if (isban.ban) {
      await message.sendMessage(message.jid, "Bot Detected");
      return;
    } else {
      return;
    }
  }
);

command(
  {
    pattern: "banbot",
    fromMe: isPrivate,
    desc: "ban bot from a chat",
    type: "",
  },
  async (message, match) => {
    const chatid = message.jid;
    const isban = await isBanned(chatid);
    if (isban) {
      return await message.sendMessage(message.jid, "Bot is already banned");
    }
    await banUser(chatid);
    return await message.sendMessage(message.jid, "Bot banned");
  }
);

command(
  {
    pattern: "unbanbot",
    fromMe: isPrivate,
    desc: "Unban bot from a chat",
    type: "user",
  },
  async (message, match) => {
    const chatid = message.jid;
    const isban = await isBanned(chatid);
    if (!isban) {
      return await message.sendMessage(message.jid, "Bot is not banned");
    }
    await unbanUser(chatid);
    return await message.sendMessage(message.jid, "Bot unbanned");
  }
);
