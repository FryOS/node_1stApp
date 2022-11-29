

const { command } = require('yargs');
const yargs = require('yargs');
const {addNote, getNotes, remove} = require("./notes.controller")
const chalk = require('chalk'); 


yargs.command({
    command: "add",
    describe: "add new note",
    builder: {
        title: {
            type: "string",
            describe: "note title",
            demandOption: true
        }
    },
    handler({title}){
        addNote(title);
    }
})

yargs.command({
    command: "print",
    describe: "print all notes",
    async handler(){
        console.log( await getNotes());
    }
})

yargs.command({
    command: "remove",
    describe: "remove note by id",
    builder: {
        id: {
            type: "string",
            demandOption: true
        }
    },
    async handler({id}){
        console.log( await remove(id));
    }
})

yargs.parse();