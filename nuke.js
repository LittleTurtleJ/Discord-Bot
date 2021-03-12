module.exports = {
    name: 'nuke',
    description: 'Obliterate somebody.',
    example: '`>nuke [@user]`',
    execute(message, args) {
        if(!args[0]) return message.channel.send('Please enter somebody who you want to obliterate.');

        const user = message.mentions.users.first();

        message.channel.send(`Obliterated ${user}.`)
    }
}