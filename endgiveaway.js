const fs = require('fs');
const Chance = require('chance');
const chance = new Chance();

module.exports = {
    name: 'endgiveaway',
    description: 'Ends the current giveaway.',
    execute(client, message, args) {
        const notes = loadNotes();

        const randomized = chance.integer({ min: 1, max: notes.length });
        
        const user = notes.find((note) => note.placement === randomized)

        console.log(user.user, user.placement)
    }
};

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