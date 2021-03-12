module.exports = {
    name: 'help',
    usage: 'help',
    description: 'Sends all commands.',
    example: '`>help` or `>help [commandName]`',
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if(!args.length) {
            data.push('Here is a list of all of my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`>help [command name]\` to get info on a specific command!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!')
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('It seems like I can\' DM you. Do you have DMs disabled?')
                });
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('That\'s not a valid command.')
        }
        data.push(`**Name:** ${command.name}`);

        if (command.usage) data.push(`**Usage:** ${command.usage}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.example) data.push(`**Example:** ${command.example}`);

        message.channel.send(data, { split: true });
    }
}