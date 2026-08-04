const http = require('http');
const server = http.createServer((req, res) => {
   res.end('Hello depuis mon app v1=> ceci est une mise a jours pour valider le ci cd');
});
server.listen(3000, () => console.log('serveuren ecoute sur le port 3000'));
