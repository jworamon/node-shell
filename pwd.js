const pwd = () => {
    const cwd = process.cwd();
    process.stdout.write(cwd);
    process.stdout.write('\nprompt > ');

}

module.exports = pwd;

