//módulo nativo de Node que permite trabajar con archivos de manera asíncrona usando await.
import fs from 'fs/promises';
//módulo nativo de Node para manejar rutas de archivos de manera segura entre distintos sistemas operativos.
import path from 'path';


/*Declara una función asincrónica llamada readFile.
Recibe como parámetro path, que es la ruta del archivo que quieres leer.
*/ 
const readFile= async (path)=>{
    //lee el archivo en la ruta dada.
    //'utf-8' indica que queremos el contenido como texto
    const data= await fs.readFile(path,'utf-8');
    //devuelve el contenido del archivo leído.
   return data;
}

export default readFile;