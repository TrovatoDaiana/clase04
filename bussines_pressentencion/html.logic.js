//módulo nativo de Node para trabajar con rutas de archivos, asegurando que funcionen en cualquier sistema operativo
import path from 'path'
//tu versión de __dirname (ya que con ES Modules no existe nativo). Sirve para obtener la ruta absoluta del directorio actual.
import __dirname  from '../utils/dirname.utils.js';
import readFile from '../utils/readFile.utils.js'
//es una función asincrónica que maneja la solicitud (req) y respuesta (res) de Express.
const serverHtmlFileIndex= async (req, res) => {
  //construye la ruta absoluta del archivo index.html
    const _Path = path.join(__dirname, '..', 'server_conExpress', 'index.html');
   //lee el contenido del archivo index.html de manera asíncrona
    const data= await readFile(_Path);
    //envía ese contenido al navegador.
    res.send(data);
  }

  export default serverHtmlFileIndex;