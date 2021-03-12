const { MessageReaction } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'giveaway',
    description: 'Creates a giveaway',
    example: '`>giveaway [item] [by who]`',
    async execute(Discord, client, message, args) {
        const notes = loadNotes();

        await message.react('👋')

        client.on('messageReactionAdd', async (reaction, user) => {
            const duplicateNote = notes.find((note) => note.user === user.id)

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (duplicateNote) return;

            if (reaction.message.channel.id === '786795861938143284') {
                if (reaction.emoji.name === '👋') {
                    placement ++;

                    notes.push({
                        user: user.id,
                        placement: placement
                    });
                    saveNotes(notes);
                } else {
                    message.reactions.cache.get(reaction).remove().catch((err) => {
                        console.log('Failed to remove reaction', err)
                    });
                }
            } else {
                return;
            }
        });
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('giveawayusers.json', dataJSON);
};
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('giveawayusers.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};
var placement = 0;