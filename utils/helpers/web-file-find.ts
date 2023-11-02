import fs from 'fs';
import path from 'path';

import {findExt} from './findExt.js';

const supportFileExtensions:string[] = ['html', 'ejs', 'hbs'];

export const changeExtensions = (data:string)=>{
    return data.replace(findExt(data),supportFileExtensions[0])
}

const webFileFindEngine = (folderPath:string) : string[] => {
    try {
        const files:string[] = fs.readdirSync(folderPath);

        const fullFileExtension:string[] = supportFileExtensions.map(ext => '.' + ext);

        const filteredFiles:string[] = [];

        files.forEach(file => {
            const filePath:string = path.join(folderPath, file);
            const isDirectory:boolean = fs.statSync(filePath).isDirectory();

            if (isDirectory) {
                const subFolderFiles:string[] = webFileFindEngine(filePath);
                subFolderFiles.forEach(subFile => {
            
                    filteredFiles.push(path.join(file, subFile).split('\\').join('/')); // Alt klasördeki dosya yolunu, ana klasör yoluna ekleyerek dosyları benzersiz yapıyoruz sonda ise diğer işletim sistemlerien uygun hale getiriyoruz
                
                });
            } else {
                for (const ffn of fullFileExtension) {
                    if (file.endsWith(ffn)) {
                        filteredFiles.push(file);
                        break;
                    }
                }
            }
        });

        return filteredFiles;
    } catch (error) {
        console.log('error: ', error.message);
        return [];
    }
}

export default webFileFindEngine