const fs = require('fs');
const { builtinModules } = require('module');

const cat = (fileName) => {
    fs.readFile(fileName, 'utf8', (err, file) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(file);
            process.stdout.write('prompt >');
        }
    });
}

module.exports = cat;