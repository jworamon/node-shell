const fs = require('fs');

const ls = () => {
    process.stdout.write('prompt > ');
    process.stdin.on('data', (data) => {
        fs.readdir('./', 'utf8', (err, files) => {
            if (err) {
                throw err
            } else {
                process.stdout.write(files.join('\n'));
                process.stdout.write('prompt > ');
            }
        })
       
    });
    
};

module.exports = ls;