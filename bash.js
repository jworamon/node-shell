const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt >');
process.stdin.on('data', data => {
    let input = data.toString().trim();
    let cmd = input.split(' ')[0];
    let fileOrURL = input.split(' ')[1];
    
    if (cmd === 'pwd') {
        pwd();
    } else if ( cmd === 'ls') {
        ls();
    } else if (cmd === 'cat') {
        cat(fileOrURL);
    } else if (cmd === 'curl') {
        curl(fileOrURL);
    }
});


