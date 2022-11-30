// const notes = []

const { log } = require("console");
const fs = require("fs/promises");
const path = require("path")
const chalk = require('chalk'); 
// import chalk from 'chalk';

const notesPath = path.join(__dirname, "db.json");

console.log(notesPath);

async function addNote(title){
    const notes = await getNotes();
    
    const note = {
        title,
        id: Date.now().toString()
    }
    notes.push(note)

    await saveNotes(notes);
    console.log(chalk.green("Note was added"));
}


async function getNotes(){
    const notes = await fs.readFile(notesPath, {encoding: "utf-8"});
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
    
}

async function saveNotes(notes){
    await fs.writeFile(notesPath, JSON.stringify(notes));
}

// async function remove(id){
//     removeObjectWithId(id);
//     console.log(chalk.green("Note was delete"));
// }

async function remove(id) {
    const arr = await getNotes();
    const items = arr.filter((obj) => obj.id !== id);
    await saveNotes(items);
    console.log(chalk.green(`Note id=${id} was deleted success`));
  }

module.exports = {
    addNote, getNotes, remove
}