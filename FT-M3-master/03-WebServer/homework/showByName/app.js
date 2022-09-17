var fs = require("fs")
var http = require("http")
// Escribí acá tu servidor
http.createServer(function (req, res) {
    //if (req.url === '/arcoiris_doge') {
        fs.readFile(`${__dirname}/images/${req.url}.jpg`, (err, data) => {
            if (err) {
                res.writeHead(404, { 'contentType': 'text/plain' });
                res.end("hubo un error")
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' }) //Le ponemos el status code y algunos pair-values en el header
                res.end(data);
            }
        })
   // }

}).listen(3001, '127.0.0.1'); 