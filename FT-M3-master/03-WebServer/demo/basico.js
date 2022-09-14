var http = require('http'); // importamos el módulo http para poder trabajar con el protocolo
var fs   = require('fs');
http.createServer(function (req, res) { // Creamos una serie de events listener, que van a escuchar por requests que ocurren en este socket
	//Para crear un response empezamos escribiendo el header
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/plain' }) //Le ponemos el status code y algunos pair-values en el header
		res.end('Hola, Mundo!\n');
	} else if (req.url === '/template') {
		res.writeHead(200, { 'Content-Type': 'text/html' }) //Le ponemos el status code y algunos pair-values en el header
		let html = fs.readFileSync(__dirname +'/html/template.html','utf-8');
		let nombre='Agustin'
		html= html.replace('{nombre}',nombre)
		res.end(html);

	} else if (req.url === '/agustin') {
		res.writeHead(200, { 'Content-Type': 'application/json' }) //Le ponemos el status code y algunos pair-values en el header
		let obj = {
			Nombre: 'Agustin',
			Apellido: 'Soleti'
		};
		res.end(JSON.stringify(obj));
	} else if (req.url === '/html') {
		
		res.writeHead(200, { 'Content-Type':'text/html' })
		var html = fs.readFileSync(__dirname +'/html/index.html');
		res.end(html);
	

	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' }) //Le ponemos el status code y algunos pair-values en el header
		let html = fs.readFileSync(__dirname +'/html/error.html','utf-8');
		let error='404'
		html= html.replace('{error}',error)
		res.end(html);
	
	}

}).listen(1337, '127.0.0.1'); //Por último tenemos que especificar en que puerto y en qué dirección va a estar escuchando nuestro servidor