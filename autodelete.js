module.exports = {
    name: 'autodelete',
    description: 'Automatically deletes a message if it doesn\'start with a number.',
    async execute(message, args) {
        if (message.channel.id === '788856768406224946') {
            await message.channel.messages.fetch({limit: 1}).then(messages => {
                message.channel.bulkDelete(messages);
            })
        }
    }
}