const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

// Configuración de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // o especifica el origen exacto
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/run-bat', (req, res) => {
    exec(`cmd /c "cd /d C:\\VENTAGI && VENTAGI.BAT"`, (error, stdout, stderr) => {
        if (error) {
            console.log(`Error al ejecutar el archivo .bat: ${error.message}`);
            return res.status(500).send(`Error al ejecutar el archivo .bat: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return res.status(500).send(`Error en stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        res.send('Archivo .bat ejecutado con éxito');
    });
});
app.get('/run-ivaco', (req, res) => {
    exec(`cmd /c "cd /d C:\\IVACO && IVACO.BAT"`, (error, stdout, stderr) => {
        if (error) {
            console.log(`Error al ejecutar el archivo .bat: ${error.message}`);
            return res.status(500).send(`Error al ejecutar el archivo .bat: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return res.status(500).send(`Error en stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        res.send('Archivo .bat ejecutado con éxito');
    });
});
app.get('/run-sueldo', (req, res) => {
    exec(`cmd /c "cd /d C:\\SUELDO && SUELDO.BAT"`, (error, stdout, stderr) => {
        if (error) {
            console.log(`Error al ejecutar el archivo .bat: ${error.message}`);
            return res.status(500).send(`Error al ejecutar el archivo .bat: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return res.status(500).send(`Error en stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        res.send('Archivo .bat ejecutado con éxito');
    });
});
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

