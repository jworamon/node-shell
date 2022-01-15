const fs = require('fs');

const cat = (fileName) => {
    fs.readFile(fileName, 'utf8', (err, file) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(file);
            process.stdout.write('\nprompt >');
        }
    });
}

module.exports = cat;