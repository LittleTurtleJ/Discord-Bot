module.exports = {
    name: 'warn',
    description: 'Warns a user (progressive)',
    example: '`>warn [@user]`',
    execute(message, args) {
        if (!args[0]) return message.channel.send('Please specify who you want to warn.');
        const member = message.mentions.members.first();
        if (!member) return message.channel.send('That is not a valid user.');

        const target = message.guild.members.cache.get(member);

        if (message.member.roles.cache.has('749404550481313812') || message.member.roles.cache.has('771857082898448394') || message.member.roles.cache.has('804489431691296800') || message.member.roles.cache.has('749404974097891328')) {
            if (member.roles.cache.has('784906679379820565')) {
                member.roles.add('784906808681693184');
                member.roles.remove('784906679379820565');
            } else if (member.roles.cache.has('784906808681693184')) {
                message.channel.send('Player has already been warned twice, please use the `>mute` command instead.')
            } else {
                member.roles.add('784906679379820565');
            }
        }
    }
}