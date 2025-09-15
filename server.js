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

import serverHtmlFileIndex from './bussines_pressentencion/html.logic.js';
import serverJsonFile from './bussines_pressentencion/json.logic.js';
import serverError from './bussines_pressentencion/error.logic.js';



//Esto crea una instancia de Express, que será tu servidor web.
const server= express();



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

  //Define la ruta /json y asocia la función serverJsonFile para manejar las solicitudes a esa ruta.
  server.get('/ferreteria', serverJsonFile);

  /*Este middleware se ejecuta si ninguna ruta anterior coincidió.
   Llama a serverError, mostrando la página 404 personalizada.
   En Express, el orden importa: debe ir al final, después de todas las rutas.
*/ 
  server.use(serverError);

  export default server;