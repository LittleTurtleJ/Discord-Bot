/*const fs = require('fs');
const chalk = require('chalk');
const notes = require('../notes.json');

module.exports = {
    name: 'request',
    description: 'Requests your health and type',
    execute(message, args) {
        const notes = loadNotes()
        const note = notes.find((note) => note.health === 5)

        if (note) {
            console.log(note.dogtype, note.health, note.user)
        } else {
            console.log(chalk.red('No user found'))
        }
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
} */