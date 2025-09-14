//Importa tu servidor Express que definiste y exportaste en server.js
import server from "./server.js";

/*Define el número de puerto en el que el servidor escuchará conexiones.
Por convención, los servidores web locales suelen usar 3000, 8080
*/
const PORT = 3000;

/*
server.listen(PORT, callback) → le dice a Node que levante el servidor y escuche en el puerto definido.
El callback se ejecuta cuando el servidor está listo.
console.log(...) imprime un mensaje en la consola para confirmar que el servidor ya está corriendo*/ 
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
