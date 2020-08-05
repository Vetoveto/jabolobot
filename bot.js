const discord = require ('discord.js');

var client = new discord.Client();

var flag = 0;

client.on ("ready", () => {
	console.log ("I am ready!");
	
	client.user.setPresence({ game: { name: 'Jogando com o Willy', type: 0 } });
});



client.on ("message", (message) => {
	if(message.author.bot) return;
	
	var data = new Date();
	var hora = data.getHours();
	
	if(hora >= 6 && hora<=18){
		if(flag == 0){
			message.channel.send("Jabol�! Jabol�! https://www.youtube.com/watch?v=yAmrvQFqZy8");
		}
		flag = 1;
	}
	
	if(hora >= 0 && hora < 9 || hora > 15){
		flag = 0;
	}
	
	
	if (message.content === 'ping') {
		message.reply('pong');
	}
	
	if (message.content === 'flag') {
		message.channel.send(flag);
	}
	
	if (message.content.includes ("rola")){
		setTimeout(function(){
			message.react('🇷');
		}, 1000);
		setTimeout(function(){
			message.react('🇴');
		}, 2000);
		setTimeout(function(){
			message.react('🇱');
		}, 3000);
		setTimeout(function(){
			message.react('🇦');
		}, 4000);
	}
});

client.login (process.env.BOT_TOKEN);