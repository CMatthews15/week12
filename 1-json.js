const fs= require('fs')

// const book = {
//     title: 'Atomics Habits',
//     author:'Matthews'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
//const data = JSON.parse(dataJSON)
const user = JSON.parse(dataJSON)

user.name = 'Chastity'
user.age = 25

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)