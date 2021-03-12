/*const fs = require('fs');
const chalk = require('chalk');
const notes = require('../notes.json');

module.exports = {
    name: 'addnote',
    description: 'Adds a note',
    execute(message, args) {
        const notes = loadNotes()
        const duplicateNote = notes.find((note) => note.user === message.author.id)

        if (!duplicateNote) {
            notes.push({
                user: message.author.id,
                dogtype: 'dog type',
                health: 5
            })
            saveNotes(notes)
            console.log(chalk.greenBright('Note added.'))
        } else {
            console.log(chalk.red('Note title used.'))
        }
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
} */