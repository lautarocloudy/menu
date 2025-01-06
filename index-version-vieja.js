var express = require('express');
var exec = require('child_process').exec;
var app = express();
var port = 3000;

// Configuración de CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // o especifica el origen exacto
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Función para ejecutar el archivo .bat
function runBatchFile() {
    return new Promise(function(resolve, reject) {
        exec('cmd /c "cd /d C:\\CAMPOGI && CAMPOGI.BAT"', function(error, stdout, stderr) {
            if (error) {
                reject('Error al ejecutar el archivo .bat: ' + error.message);
            } else if (stderr) {
                reject('Error en stderr: ' + stderr);
            } else {
                resolve(stdout);
            }
        });
    });
}

app.get('/run-bat', function(req, res) {
    runBatchFile()
        .then(function(stdout) {
            console.log('stdout: ' + stdout);
            res.send('Archivo .bat ejecutado con éxito');
        })
        .catch(function(err) {
            console.log(err);
            res.status(500).send(err);
        });
});

app.listen(port, function() {
    console.log('Servidor corriendo en http://localhost:' + port);
});
