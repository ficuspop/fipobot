const util = require("./src/util");
const Discord = require('discord.js')
const client = new Discord.Client()
const TOKEN = "NzQ5NjMzOTI2NDkzODk2Nzc0.X0u0_w.ct6i7b42P4c3rFpE4au70gShdIQ"

client.on('ready', () => {
    console.log(`${client.user.username} でログインしています。`)
})

client.on("message", async (msg) => {
  if (msg.content === "!help") {
    msg.channel.send(
`「!nDn」 ダイスを振ります。
「!exit」 botを終了します。`
    );
  }
});

client.on('message', async msg => {
    if (msg.content === '!ping') {
        msg.channel.send('Pong!')
    }
})

client.on("message", async (msg) => {
  if (msg.content === "!exit") {
    msg.channel.send("exit");
    client.destroy()
  }
});

client.on("message", async (msg) => {
  if (msg.content.includes("D") && msg.content.indexOf("!") === 0) {
    const diceNum = msg.content.replace("!", "").split("D");
    if (diceNum.length === 2) {
      const dice = diceNum[0];
      const diceSur = diceNum[1];
      var diceSum = 0;
      for (var i = 0; i < dice; i++) {
        diceSum = diceSum + util.getRandomInt(diceSur) + 1;
      }
      msg.channel.send(msg.author.username+"("+ msg.content.replace("!", "")+")"+" ： "+diceSum);
    }
  }
});


client.login(TOKEN)


