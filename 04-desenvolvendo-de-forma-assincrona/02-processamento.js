var http = require('http');
var fs = require('fs');
var leituraAsync = require('./02-leitura_async.js');
var leituraSync = require('./02-leitura_sync.js');
var arquivo = "./node.zip";
var stream = fs.createWriteStream(arquivo);
var download = "http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz";
http.get(download, function(res) {
    console.log("Fazendo download do Node.js");
    res.on('data', function(data) {
        stream.write(data);
    });
    res.on('end', function() {
        stream.end();
        console.log("Download finalizado!");
        leituraAsync(arquivo);
        leituraSync(arquivo);
    });
});