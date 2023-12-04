
// setting variable fs to the require function that is used to load in file system module
// const fs = require('fs')

// file system module being used in function with 2 arguments
//writeFile methods write data to a file, if file doesnt exist one will be created, if it does exist, it will be over written. 
//fs.writeFileSync('notes.txt', 'my name is chastity')
// fs.appendFileSync('notes.txt', ' ,I am 25')



//require function is used to load in anothe javascript file
//set the variable to be pulled from the module
// const add = require('./utils.js')

// // const name  = 'Chastity'
// const sum = add(4,-2)

// console.log(sum)

// const validator = require('validator') 

const notes = require('./notes.js');

// const msg = getNotes()   

// console.log(msg)

// used validator npm package to check email 
//console.log(validator.isEmail('frank'))

const chalk = require('chalk');
const yargs = require('yargs');
const message = chalk.red.bold.underline.inverse('Success!');
console.log(message)

//argv is an array

// const command = process.argv[2]
// console.log(process.argv)
console.log(yargs.argv)

// if(command === 'add'){
//     console.log ('Adding Note')
// } else if(command === 'remove'){
//     console.log('Removing Note')
// }
 yargs.version('1.1.0')
 
yargs.command({
    command:'add',
    describe: 'adding A Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string',
            
        },
        body:{
            describe:"note body",
            demandOption:true,
            type:'string',
        }
    },
    handler: function (argv){
        // console.log('Title:' + argv.title)
        // console.log('Body:' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})
//create remove command
yargs.command({
    command:'remove',
    describe: 'Remove A Note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'
        }
    },

    handler: function (){
    notes.removeNote(argv.title)
    
        //console.log('Removing the Note')
    }
})
yargs.command({
    command:'list',
    describe: 'list A Note',
    handler: function (){
        //console.log('listing the Note')
notes.listNotes()
    }
})
yargs.command({
    command:'read',
    describe: 'Read A Note',
    handler(argv){
        notes.readNote(argv.title)
            },
    builder:{
        title:{
            describe:"note tile",
            demandOption:true,
            type:'string'
        }
    }
        }
)

console.log(yargs.argv)