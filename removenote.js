/*const fs = require('fs');
const chalk = require('chalk');
const notes = require('../notes.json');

module.exports = {
    name: 'removenote',
    description: 'Removes a note',
    execute(message, args) {
        const notes = loadNotes()
        const notes2 = loadNotes2()
        const deleteNotes = notes.filter((note) => note.health === 5)

        if (deleteNotes.length !== 0) {
            console.log(chalk.red('Note title not found.'))
            saveNotes(deleteNotes)
        } else {
            console.log(chalk.greenBright('Note removed.'))
            saveNotes(deleteNotes)
        }
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
};

const saveNotes2 = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes2.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const loadNotes2 = () => {
    try {
        const dataBuffer = fs.readFileSync('notes2.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
} */