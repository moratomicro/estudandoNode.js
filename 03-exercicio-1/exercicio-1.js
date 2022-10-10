var http = require('http');
var url = require('url');
var fs = require('fs');
var url_artigos = "/";
var url_contato = "/contato";

var server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    var result = url.parse(request.url);

    if (result.pathname == url_artigos) {
        fs.readFile(__dirname + '/index.html', function(err, html) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html);
            response.end();
        });
    } else if (result.pathname == url_contato) {
        fs.readFile(__dirname + '/contato.html', function(err, html) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html);
            response.end();
        });
    } else {
        fs.readFile(__dirname + '/erro.html', function(err, html) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html);
            response.end();
        });
    }
});
server.listen(3000, function() {
    console.log('Executando Server Exercicio...');
});