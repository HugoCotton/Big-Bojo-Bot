const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ("f!")
let statusChoice = ['f! | bojo for the sexy times', 'f! | rape is just a joke gone well'];



client.on('ready', () => {

    console.log('I am ready!');
	setInterval(function(){
		let displayedStatus = statusChoice[Math.floor(Math.random()*statusChoice.length)];
		client.user.setPresence({
			status: 'online',
			activity:{
				name: displayedStatus
			}
		})
	},20000)
});

 

client.on('message', async message => 
	
	{if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (command === 'ping') {
		message.channel.send('Pong. hello i am flinty bot sexy sex');
    } else if (command === 'say') {
		if (!args.length) {
			return message.channel.send(`say something smh ${message.author}!`);
		}
		if (message.content.includes('@everyone')) {
			if (!message.member.hasPermission("MENTION_EVERYONE")) return message.channel.send('invalid perms get rekt')
		}
		else if (message.content.includes('@here')) {
			if (!message.member.hasPermission("MENTION_EVERYONE")) return message.channel.send('invalid perms get rekt')
		}
		else {
			message.channel.send(`${args.join(' ')}`);
			message.delete(args)
		}
});


 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
