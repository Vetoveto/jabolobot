const discord = require ('discord.js');

var client = new discord.Client();

var flag = 0;
var numero = 0;
var prefix = "!";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on ("ready", () => {
	console.log ("I am ready!");
	
	client.user.setPresence({ game: { name: 'ROBERTO', type: 0 } });
});

client.on ("message", (message) => {
	if(message.author.bot) return;
	
	var data = new Date();
	var hora = data.getHours();
	var rand;
	
	if (message.content === 'ping') {
		message.reply('pong');
	}
	
	if (message.content === prefix + "zackputo") {
		numero++;
		if(numero == 1){
			message.channel.send("Jabolo! Jabolo! (Atencao, desde o ultimo reset o nosso querido <@234853777901879297> ficou puto " + numero +  " vez) https://www.youtube.com/watch?v=yAmrvQFqZy8");
		}
		else{
			message.channel.send("Jabolo! Jabolo! (Atencao, desde o ultimo reset o nosso querido <@234853777901879297> ficou puto " + numero +  " vezes!) https://www.youtube.com/watch?v=yAmrvQFqZy8");
		}
	}
	
	if (message.content === prefix + "zackputa") {
		numero++;
		if(numero == 1){
			message.channel.send("Jabolo! Jabolo! (Atencao, desde o ultimo reset o nosso querido <@234853777901879297> ficou puto " + numero +  " vez) https://www.youtube.com/watch?v=yAmrvQFqZy8");
		}
		else{
			message.channel.send("Jabolo! Jabolo! (Atencao, desde o ultimo reset o nosso querido <@234853777901879297> ficou puto " + numero +  " vezes!) https://www.youtube.com/watch?v=yAmrvQFqZy8");
		}
	}
	
	if (message.content === prefix + "tiltazack"){
		rand = Math.random();
		switch(rand){
			case 0:
				message.channel.send("https://youtu.be/akT9oPY3OPQ");
				break;
			case 1:
				message.channel.send("https://febracis.com/");
				break;
		}
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