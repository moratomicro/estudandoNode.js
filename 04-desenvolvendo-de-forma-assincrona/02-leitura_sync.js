var fs = require('fs');
var leituraSync = function(arquivo){
    console.log("Fazendo leitura síncrona");
    var inicio = new Date().getTime();
    fs.readFileSync(arquivo, err =>{
        if(err) console.log(err)
      });
    var fim = new Date().getTime();
    console.log("Bloqueio síncrono: "+(fim - inicio)+ "ms");
};
module.exports = leituraSync;