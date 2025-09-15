//módulo nativo de Node para trabajar con rutas de archivos, asegurando que funcionen en cualquier sistema operativo
import path from 'path'
//tu versión de __dirname (ya que con ES Modules no existe nativo). Sirve para obtener la ruta absoluta del directorio actual.
import __dirname  from '../utils/dirname.utils.js';
import readFile from '../utils/readFile.utils.js'



//creo funcion para que lea un archivo json
  const serverJsonFile= async (req, res) => {
    //construye la ruta absoluta del archivo ferreteria.db.json
    const _Path = path.join(__dirname, '..', 'dataBase', 'ferreteria.db.json');
    //lee el contenido del archivo ferreteria.db.json de manera asíncrona
    let data= await readFile(_Path);
    data= JSON.parse(data);
    //envía ese contenido al navegador.
    res.send({data});
   
  }

  export default serverJsonFile;