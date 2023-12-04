const fs = require('fs')
const { title } = require('process')
const getNotes = function(){
    return 'Your notes'
}


const addNote = function(title, body){
const notes = loadNotes()
// use array push method to add note

//use array filter method to check for duplicates in array that takes a note as an argument
const duplicateNotes = notes.filter(function (note){
    return note.title === title}
)
const duplicateNote= notes.find =(note)=>note.title ===title

if (!duplicateNote){ 
    notes.push({
title:title,
body:body })
saveNotes(notes)
console.log('new note added')
}
else{
    console.log('Note title used')
}}

const removeNote = function (title){
    const notes =loadNotes()
    const notesToKeep = notes.filter(function(note){
     return note.title !== title   
    })


notes.push(
    {title: title,
    body: body
})
saveNotes(notes)
}

const listNote = ()=>{
    const notes= loadNotes()
    notes.forEach = (note) => {
        console.log(note.title)
    }
}

const readNote =(title)=>{
    const notes= loadNotes()
    const note = notes.find((note)=> note.title ===title)

if(note){
    console.log(chalk.inverse(note.title))
    console.log(note.body)
}
else{
    console.log(chalk.inverse("note not found"))
}

}
// save function takes the argument of notes
const saveNotes = function (notes){
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json', notes)
}

const loadNotes = function (){
    try{
const dataBuffer = fs.readFileSync('notes.JSON')
const dataJSON = dataBuffer.toString()
return JSON.parse(dataJSON)}

// if try is not satisfied, will return an empty array
catch(e){
    return []
}
}

// set equal to object that usees a function as the keynand the function mreturn as the property
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}