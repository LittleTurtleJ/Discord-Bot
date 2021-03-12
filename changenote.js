/*const fs = require('fs');
const chalk = require('chalk');
const notes = require('../notes.json');
const notes2 = require('../notes2.json');

module.exports = {
    name: 'changenote',
    description: 'Changes note location',
    execute(message, args) {
        console.log('accepted')
        
        const notes = loadNotes();
        const notes2 = loadNotes2();

        const noting = notes.find((note) => note.user === '329480040569896960')

        console.log(noting);
        console.log(noting.user, noting.dogtype, noting.health);

        notes2.push({
            user: noting.user,
            dogtype: noting.dogtype,
            health: 4
        });
        saveNotes2(notes2);
        console.log('accepted2')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
};

const saveNotes2 = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes2.json', dataJSON)
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const loadNotes2 = () => {
    try {
        const dataBuffer = fs.readFileSync('notes2.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
} */