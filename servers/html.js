const http = require ("http");

const host = 'localhost';

const port = 3001;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    switch(req.url) {
    case "/accueil" :
        res.write(200);
        res.end(`<html><body><h1>Bienvenue sur l'Acceuil</h1></body></html>`);
        console.log('Vous êtes a l\'accueil');
        break
    case "/profile" :
        res.write(200);
        res.end(`<html><body><h1>Bienvenue sur votre profile</h1></body></html>`);
        console.log("Vous etes sur votre profile");
        break
    case "/Logo" :
        res.write(200);
        res.end(`<html><body><img src="logo.png"></body></html>`);
        console.log('Vous etes sur logo');
        break
    default :
        res.writeHead(200);
        res.end('my server javascript');
        console.log('premierserv');
    }
};

const  server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server tourne sur http://${host}:${port}`);
});