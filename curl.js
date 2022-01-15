const request = require ('request');

const curl = (url) => {
    request(url, (err, response, body) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(body);
            process.stdout.write('\nprompt >');
        }
    });
}

module.exports = curl;