const chalk = require('chalk');
const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'Mutes a player.',
    example: '`>mute [@user]`',
    execute(Discord, client, message, args) {
        if (message.member.roles.cache.has('749404550481313812') || message.member.roles.cache.has('771857082898448394') || message.member.roles.cache.has('804489431691296800') || message.member.roles.cache.has('749404974097891328')) {
            if (!args[0]) return message.channel.send('Please specify a user to mute.');

            const target = message.mentions.members.first();
            if (!target) return message.channel.send('That is not a valid user.');
            
            const embed = new Discord.MessageEmbed()
                .setColor('D20000')
                .setDescription(`${message.author} muted ${target} for time: ${args[1]} with reason as: ${args.splice(1 && 2).join(' ')}`)
                .setTimestamp()
                .setFooter(`${message.author.id}`)

            const time = args[1];

            target.roles.remove('749103227814936607');
            target.roles.add('761352637630251030');
            message.channel.send(`<@${target.user.id}> has been muted by <@${message.author.id}>.`);
            client.channels.cache.get('806703078807568404').send(target, embed);
        
            setTimeout(() => {
                target.roles.add('749103227814936607');
                target.roles.remove('761352637630251030');
                message.channel.send(`<@${target.user.id}> has been unmuted.`);
            }, ms(time));
        } else {
            message.channel.send('You do not have sufficient permissions to use this command.');
        }
    }
}