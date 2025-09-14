/*// Importar express
import express from 'express';

// Crear la app
const app = express();

// Definir un puerto
const PORT = 3000;

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Hola, mundo desde Express!");
});

// Levantar el servidor
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});*/

import express from 'express';
import path from 'path';
import readFile from './utils/readfile.utils.js';
import __dirname from './utils/dirname.utils.js';

const server= express();

const serverHtmlFileIndex= async (req, res) => {
    const _Path = path.join(__dirname, '..', 'server_conExpress', 'index.html');
    const data= await readFile(_Path);
    res.send(data);
  }

  const serverError=async (req, res) => {
    console.log('Error 404 - Not Found');
    const _Path = path.join(__dirname, '..', 'server_conExpress', '404.html');
    let data= await readFile(_Path);
    
    data=data
    .replace('{{status}}', '404')
    .replace('{{message}}', 'Not Found');

    res
    .status(404)
    .send(data);
  }

  server.use((req, res, next) => {
    const {method, url} = req;
    console.log(`Middleware - ${method} ${url}`);
    next();
  });

  server.get('/', serverHtmlFileIndex);

  server.use(serverError);

  export default server;