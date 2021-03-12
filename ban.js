module.exports = {
    name: 'ban',
    description: 'This command bans a member.',
    example: '`>ban [userID]`',
    execute(message, args) {
        if (!args[0]) return message.channel.send('Please specify who you want to ban.');

        const member = message.guild.members.cache.get(args[0]);
        if (!member) return message.channel.send('That is an invalid user.')

        if (message.member.roles.cache.has('749404550481313812') || message.member.roles.cache.has('771857082898448394') || message.member.roles.cache.has('749104805204721684')) {
            const target = message.guild.members.cache.get(args[0]);

            if (target.roles.cache.has('749404550481313812') || target.roles.cache.has('771857082898448394') || target.roles.cache.has('749104805204721684') || target.roles.cache.has('749404974097891328')) return message.channel.send('That player has too high of a role.')

            target.ban();
        } else {
            message.channel.send('You have insufficient permmisions to use this command.');
        }
    }
}