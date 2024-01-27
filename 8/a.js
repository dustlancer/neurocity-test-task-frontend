let fs = require('fs');

let str = fs.readFileSync('input.txt', 'utf8');
let newStr = str.split('').reverse().join('');

fs.writeFile("output.txt", newStr, function(error){
    if(error){ 
        return console.log(error);
    }
    console.log("Сохранено");
});