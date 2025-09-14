import fs from 'fs/promises';
import path from 'path';

const readFile= async (path)=>{
    const data= await fs.readFile(path,'utf-8');
   return data;
}

export default readFile;