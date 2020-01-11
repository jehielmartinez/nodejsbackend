const http = require('http');
const server = require('http').createServer();

server.on('request', (req, res) => {
    false.readFile('./big', (err, data) => {
        if (err) {
            console.log(err);
        }

        res.end(data);
    });
});

server.listen(8000);