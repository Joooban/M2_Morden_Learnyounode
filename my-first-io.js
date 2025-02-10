// Morden, Jhouvann S.


const fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);
var stringg = buff.toString();
var strArray = stringg.split('\n');

console.log(strArray.length - 1);