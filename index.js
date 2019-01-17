const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg require('./index.json'); // a garder en version desktop
const token = process.env.token // a garder en version heroku
const prefix = ("!");

bot.on('ready', function () {
    console.log("Bot prêt.")
    bot.user.setActivity('Osmonia').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur Osmonia !' + member.displayName)
        console.log(`${member.displayName} a rejoint le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');
require('./embed/RichEmbed');

bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "Bonjour"){
        msg.reply("Heureux de vous revoir parmis nous.")
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("http://osmonia.fr/")
        console.log("Une personne a demandé pour aller sur le site Monsieur Blu.")
    }

});

bot.login(cfg.token);
bot.login(token);
