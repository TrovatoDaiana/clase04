import path from 'path';

/*
Esta función utiliza el módulo 'url' de Node.js para obtener la ruta del archivo actual.
Esto es necesario porque, en los módulos ES, no existe una forma nativa de obtener __dirname ni __filename.
*/ 
import { fileURLToPath } from 'url';

//convierte esa URL en una ruta de archivo absoluta
const __filename = fileURLToPath(import.meta.url);
//obtiene el directorio que contiene ese archivo
const __dirname = path.dirname(__filename);

export default __dirname;