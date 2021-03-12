module.exports = {
    name: 'roles',
    description: 'Gives you a specified gender role.',
    usage: '`>role`',
    example: '`>role [male/female/they]`',
    execute(message, args) {
        if (!args[0]) return message.reply('Please specify what role you want with male/female/they.');
        if (!isNaN(args[0])) return message.reply('Please enter a valid role.');

        const member = message.author.id;
        const target = message.guild.members.cache.get(member)

        if (args[0] === 'male') {
            if (target.roles.cache.has('801207957559181313')) {
                target.roles.remove('801207957559181313')
            } else {
                target.roles.add('801207957559181313')
            }
        } else if (args[0] === 'female') {
            if (target.roles.cache.has('801208008032911391')) {
                target.roles.remove('801208008032911391')
            } else {
                target.roles.add('801208008032911391')
            }
        } else if (args[0] === 'they') {
            if (target.roles.cache.has('801208045010550795')) {
                target.roles.remove('801208045010550795')
            } else {
                target.roles.add('801208045010550795')
            }
        }
    }
}