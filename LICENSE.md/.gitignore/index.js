const Discord = require('discord.js');
const bot = new Discord.client

var prefix = ("*")

bot.on('ready',function() {
	bot.user.setGame("Command: *help");
	console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message',message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage("List des commandes: \n -*help")
	}

	if(messagecontent === "Salut"){
		essage.reply("waf waf waf(Bonjour)")
		console.log("Command Salut effectué");
	}
});
