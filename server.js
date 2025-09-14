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

//importa el framework Express para crear un servidor web en Node.js
import express from 'express';
//módulo nativo de Node para trabajar con rutas de archivos, asegurando que funcionen en cualquier sistema operativo
import path from 'path';
//tu función personalizada para leer archivos de manera asíncrona
import readFile from './utils/readfile.utils.js';
//tu versión de __dirname (ya que con ES Modules no existe nativo). Sirve para obtener la ruta absoluta del directorio actual.
import __dirname from './utils/dirname.utils.js';

//Esto crea una instancia de Express, que será tu servidor web.
const server= express();

//es una función asincrónica que maneja la solicitud (req) y respuesta (res) de Express.
const serverHtmlFileIndex= async (req, res) => {
  //construye la ruta absoluta del archivo index.html
    const _Path = path.join(__dirname, '..', 'server_conExpress', 'index.html');
   //lee el contenido del archivo index.html de manera asíncrona
    const data= await readFile(_Path);
    //envía ese contenido al navegador.
    res.send(data);
  }


  //también es asincrónica y maneja solicitudes que no coinciden con ninguna ruta.
  const serverError=async (req, res) => {
    //construye la ruta absoluta del archivo 404.html
    console.log('Error 404 - Not Found');
    //lee el contenido del archivo 404.html de manera asíncrona
    const _Path = path.join(__dirname, '..', 'server_conExpress', '404.html');
    let data= await readFile(_Path);
    
    //Reemplaza placeholders en el HTML ({{status}} y {{message}}) con los valores reales (404 y Not Found).
    data=data
    .replace('{{status}}', '404')
    .replace('{{message}}', 'Not Found');


    //envía el contenido modificado al navegador con un estado 404.
    res
    .status(404)
    .send(data);
  }

  //middleware que se ejecuta en cada solicitud al servidor.
  //Toma req y res y también next() que indica a Express que continúe con el siguiente middleware o ruta.
  //Sirve para depuración y seguimiento de peticiones
  server.use((req, res, next) => {
    const {method, url} = req;
    //Aquí se imprime en consola el método HTTP y la URL de cada solicitud.
    console.log(`Middleware - ${method} ${url}`);
    next();
  });


  //Define la ruta raíz ('/') y asocia la función serverHtmlFileIndex para manejar las solicitudes a esa ruta.
  /*Cuando un cliente haga GET /, Express ejecutará serverHtmlFileIndex.
    Esto hace que tu index.html se sirva cuando alguien visite 
    http://localhost:3000/
  */ 
  server.get('/', serverHtmlFileIndex);


  /*Este middleware se ejecuta si ninguna ruta anterior coincidió.
   Llama a serverError, mostrando la página 404 personalizada.
   En Express, el orden importa: debe ir al final, después de todas las rutas.
*/ 
  server.use(serverError);

  export default server;