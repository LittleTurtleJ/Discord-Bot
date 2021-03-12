module.exports = {
    name: 'autotest',
    description: 'Automatically tests if the number is ++ to the previous number.',
    async execute(message, args) {
        currentnumber ++;

        const numberstring = currentnumber.toString();

        if (args[0] == numberstring) {
            return;
        } else {
            await message.channel.messages.fetch({limit: 1}).then(messages => {
                message.channel.bulkDelete(messages);
            })
            currentnumber --;
        }
    }
}

let currentnumber = 1644;