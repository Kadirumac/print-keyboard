const fs = require('fs');

const path =require('path');


const textFileName = 'keyboard.txt'
const textFilePath = path.join('./',textFileName);
console.log('fs.js',process.cwd())



    fs.readFile(textFilePath, (err,data) =>{
        console.log(data.toString())
        process.exit()
    })
    


