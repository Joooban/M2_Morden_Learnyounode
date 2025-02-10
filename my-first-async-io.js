// Morden, Jhouvann S.

var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    if (!err) {
        var stringg = data.toString();
        var strArray = stringg.split('\n');
        
        console.log(strArray.length - 1);
    };
});