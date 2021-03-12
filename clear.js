module.exports = {
    name: 'clear',
    description: 'Clear messages',
    example: '`>clear [message amount]`',
    async execute(message, args) {
        if (message.member.roles.cache.has('749104805204721684') || message.member.roles.cache.has('793297362105794570') || message.member.roles.cache.has('771857082898448394') || message.member.roles.cache.has('749404550481313812')) {
            if(!args[0]) return message.reply('You must specificy the amount of messages you want to clear.');
            if(isNaN(args[0])) return message.reply('Please enter a number.');
        
            if(args[0] > 100) return message.reply('More than 100 messages cannot be deleted.');
            if(args[0] < 1) return message.reply('You must deleted a number higher than one.')

            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            });
        } else {
            message.channel.send('You do not have the permissions to use this command.');
        }
    }
}