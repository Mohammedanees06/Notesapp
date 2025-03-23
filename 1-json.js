const fs = require('fs')
 // Reads file
const dataBuffer = fs.readFileSync('1-json.json') // Reads file
const dataJSON = dataBuffer.toString() // Converts buffer to string
const data = JSON.parse(dataJSON) // Converts string to object
data.name = 'anees' // Adds property to object                             
data.age = 22 // Adds property to object
const dataJSON2 = JSON.stringify(data) // Converts object to JSON
fs.writeFileSync('1-json.json', dataJSON2) // Writes JSON to file
console.log(data) // Outputs object

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book) // Converts object to JSON
// fs.writeFileSync('1-json.json', bookJSON) // Writes JSON to file
// const dataBuffer = fs.readFileSync('1-json.json') // Reads file
// console.log(dataBuffer) // Outputs buffer
// const dataJSON = dataBuffer.toString() // Converts buffer to string
// console.log(dataJSON) // Outputs string

// const data = JSON.parse(dataJSON) // Converts string to object
// console.log(data.title) // Outputs object property

