var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Hello World!<h1>");
    response.write("<h3>Minha primeira página web em <u style='color:red; font-size:4em'>Node.js</u><h3>");
    response.end();
});
server.listen(3000, function() {
    console.log('Servidor Hello_Server rodando...');
});