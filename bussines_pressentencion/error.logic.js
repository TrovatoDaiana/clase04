//módulo nativo de Node para trabajar con rutas de archivos, asegurando que funcionen en cualquier sistema operativo
import path from 'path'
//tu versión de __dirname (ya que con ES Modules no existe nativo). Sirve para obtener la ruta absoluta del directorio actual.
import __dirname  from '../utils/dirname.utils.js';
import readFile from '../utils/readFile.utils.js'

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

  export default serverError;