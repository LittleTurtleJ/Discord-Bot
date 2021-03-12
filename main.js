require('dotenv').config();
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const fs = require('fs');
const talkedRecently = new Set();
const prefix = '>';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
const fileCommands = fs.readdirSync('./DogCommands/').filter(file => file.endsWith('.js'));
const modCommands = fs.readdirSync('./ModCommands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
};
for (const file of fileCommands) {
    const command = require(`./DogCommands/${file}`);

    client.commands.set(command.name, command);
};
for (const file of modCommands) {
    const command = require(`./ModCommands/${file}`);

    client.commands.set(command.name, command);
};

//ID's of people who would test bot n stuff
const blockUsers = ['476869563427061762'];
const turt = '329480040569896960';
const turt1 = '786829443603365940';
const malk = '655270300841410569';
const cultist = '799367729688870922';
const jj = '408404578229551107'

client.once('ready', async () => {
    console.log(chalk.greenBright('Am online'));
    client.user.setActivity('my final form', { type: 'WATCHING' });
    client.channels.cache.get('761352912776593438').send('What just cause was I muted for this time? Please note I checked Blushie\'s message and there was no reason given')
});

client.on('guildMemberAdd', guildMember => {
    guildMember.roles.add('749103227814936607');
    if (guildMember.id === turt) return;
    guildMember.guild.channels.cache.get('749102061563674724').send(`Welcome <@${guildMember.user.id}> to our humble abode. Please check the rules if you are new.`)
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (blockUsers.includes(message.author.id)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //This bit could use some work, its better with my newer bot which doesn't have as many cmds
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args)
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args)
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args)
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args)
    } else if (command === 'mute') {
        client.commands.get('mute').execute(Discord, client, message, args)
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args)
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(Discord, client, message, args)
    } else if (command === 'random') {
        //Made this before any good cooldowns existed
        if (message.author.id === turt || message.author.id === cultist || message.author.id === jj) {
            client.commands.get('random').execute(message, args)
        } else {
            if (talkedRecently.has(message.author.id)) {
                message.channel.send('Wait 15 seconds before typing this again.');
            } else {
                client.commands.get('random').execute(message, args)

                talkedRecently.add(message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(message.author.id);
                }, 15000);
            }
        }
    } else if (command === 'react') {
        if (message.author.id === turt || message.author.id === cultist) {
            client.commands.get('reaction').execute(message, args)
        }
    } else if (command === 'nuke') {
        client.commands.get('nuke').execute(message, args)
    } else if (command === 'embed') {
        if (message.author.id === turt) {
            client.commands.get('embed').execute(message, args)
        } else {
            message.channel.send('You\'ve gotta be Turtle to do that.')
        }
    } else if (command === 'build') {
        client.commands.get('build').execute(message, args)
    } else if (command === 'insult') {
        client.commands.get('insult').execute(message, args)
    } else if (command === 'app') {
        client.commands.get('app').execute(message, args)
    } else if (command === 'role') {
        client.commands.get('roles').execute(message, args)
    } else if (command === 'new') {
        if (message.author.id === turt) {
            client.commands.get('newplayer').execute(message, args)
        }
    } else if (command === 'feed') {
        if (message.author.id === turt) {
            client.commands.get('feed').execute(message, args)
        }
    } else if (command === 'vet') {
        if (message.author.id === turt) {
            client.commands.get('vet').execute(message, args)
        }
    } else if (command === 'play') {
        if (message.author.id === turt) {
            client.commands.get('play').execute(message, args)
        }
    } else if (command === 'walk') {
        if (message.author.id === turt) {
            client.commands.get('walk').execute(message, args)
        }
    } else if (command === 'train') {
        if (message.author.id === turt) {
            client.commands.get('train').execute(message, args)
        }
    } else if (command === 'leaderboard') {
        if (message.author.id === turt) {
            client.commands.get('leaderboard').execute(message, args)
        }
    } else if (command === 'backup') {
        if (message.author.id === turt) {
            const target = message.guild.members.cache.get(turt);
            target.roles.add('800175405650542592');
        }
    } else if (command === 'delete') {
        if (message.author.id === turt) {
            client.commands.get('deleteuser').execute(message, args)
        }
    } else if (command === 'giveaway') {
        client.commands.get('giveaway').execute(Discord, client, message, args)
    } else if (command === 'endgiveaway') {
        client.commands.get('endgiveaway').execute(client, message, args)
    } else if (command === '<') {
        message.channel.send('>.<')
    } else if (command === 'warn') {
        client.commands.get('warn').execute(message, args)
    } else if (command === 'owo' || command === 'uwu') {
        if (command === 'owo') {
            message.channel.send('uwu')
        } else {
            message.channel.send('owo')
        }
    } else if (command === 'image') {
        client.commands.get('image').execute(message, args)
    }
});

client.login(process.env.DISCORD_TOKEN);
