const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world\n');
});

server.listen(8000);
console.log('Servidor en el puerto 8000');