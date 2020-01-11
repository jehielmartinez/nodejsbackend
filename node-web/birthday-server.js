const http = require('http');
const server = http.createServer();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

server.on('request', (req, res) => {
    if(req.method === 'POST' && req.url === '/birthday'){
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            body = Buffer.concat(body).toString();
            let birthday = new Date(body).getDay();
            res.end(days[birthday]);
        })
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(8001);
console.log('Birthday server on http://localhost:8001');