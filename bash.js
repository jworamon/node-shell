process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = process.cwd(); 
    process.stdout.write('Current directory: ' + cmd);
    process.stdout.write('\nprompt > ');
})




