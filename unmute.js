module.exports = {
    name: 'unmute',
    description: 'Unmutes a specified player.',
    example: '`>unmute [@user]`',
    execute(Discord, client, message, args) {
        if (!args[0]) return message.channel.send('Please specify a member to unmute.');
        
        const member = message.mentions.members.first();
        if (!member) return message.channel.send('That is not a user');

        const embed = new Discord.MessageEmbed()
            .setColor('D20000')
            .setDescription(`${message.author} unmuted ${member}.`)
            .setTimestamp()
            .setFooter(`${message.author.id}`)

        message.channel.send(embed);

        const target = message.guild.members.cache.get(member.id);

        if(message.member.roles.cache.has('749404550481313812')) {
            //Owner Unmute
            if(member.roles.cache.has('761352637630251030')) {
                target.roles.add('749103227814936607');
                target.roles.remove('761352637630251030')
                message.channel.send('Player has been unmuted.')
            } else {
                message.channel.send('Player is not muted.')
            }
        } else if(message.member.roles.cache.has('771857082898448394')) {
            //Co-Owner Unmute
            if(member.roles.cache.has('761352637630251030')) {
                target.roles.add('749103227814936607');
                target.roles.remove('761352637630251030')
                message.channel.send('Player has been unmuted.')
            } else {
                message.channel.send('Player is not muted.')
            }
        } else if(message.member.roles.cache.has('804489431691296800')) {
            //Admin Unmute
            if(member.roles.cache.has('761352637630251030')) {
                target.roles.add('749103227814936607');
                target.roles.remove('761352637630251030')
                message.channel.send('Player has been unmuted.')
            } else {
                message.channel.send('Player is not muted.')
            }
        } else {
            message.channel.send('You do not have the permissions to do this.')
        }
    }
}