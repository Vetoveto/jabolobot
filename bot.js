const discord = require ('discord.js');

var client = new discord.Client();

var flag = 0;
var numero = 0;
var plu = "es";

client.on ("ready", () => {
	console.log ("I am ready!");
	
	client.user.setPresence({ game: { name: 'Jogando com o Willy', type: 0 } });
});



client.on ("message", (message) => {
	if(message.author.bot) return;
	
	var data = new Date();
	var hora = data.getHours();
	
	if(hora >= 2 && hora <=23 && message.content !== 'zack ta puto'){
		if(flag == 0){
			message.channel.send("<@87590108299001856> Jabolo! Jabolo! https://www.youtube.com/watch?v=yAmrvQFqZy8");
		}
		flag = 1;
	}
	
	if((hora >= 0 && hora < 6) && flag == 1){
		flag = 0;
	}
	
	
	if (message.content === 'ping') {
		message.reply('pong');
	}
	
	if (message.content === 'flag') {
		message.channel.send(flag);
	}
	
	if (message.content === 'zack ta puto') {
		numero++;
		if(numero == 1){
			message.channel.send("Jabolo! Jabolo! (Atencao, desde o ultimo reset o nosso querido <@234853777901879297> ficou puto " + numero +  "vez) https://www.youtube.com/watch?v=yAmrvQFqZy8");
		}
		else{
			message.channel.send("Jabolo! Jabolo! (Atencao, desde o ultimo reset o nosso querido <@234853777901879297> ficou puto " + numero +  "vezes!) https://www.youtube.com/watch?v=yAmrvQFqZy8");
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