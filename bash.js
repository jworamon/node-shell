const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt >');
process.stdin.on('data', data => {
    let input = data.toString().trim();
    let cmd = input.split(' ')[0];
    let fileName = input.split(' ')[1];
    
    if (cmd === 'pwd') {
        pwd();
    } else if ( cmd === 'ls') {
        ls();
    } else if (cmd === 'cat') {
        cat(fileName);
    }
});


