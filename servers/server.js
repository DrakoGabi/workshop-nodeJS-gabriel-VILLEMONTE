const http = require ("http");

const host = 'localhost';

const port = 3001;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("premier serv sur js!");
};

const  server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server tourne sur http://${host}:${port}`);
});