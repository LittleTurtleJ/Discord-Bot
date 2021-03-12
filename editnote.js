/*const fs = require('fs');
const chalk = require('chalk');
const notes = require('../notes.json');

module.exports = {
    name: 'editnote',
    description: 'Edits a note',
    execute(message, args) {
        const notes = loadNotes()
        notes.forEach((note) => {
            console.log(note.health)
        })
    }
}

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