import fs from 'fs';
import path from 'path';
import { findExt } from './findExt.js';
const supportFileExtensions = ['html', 'ejs', 'hbs'];
export const changeExtensions = (data) => {
    return data.replace(findExt(data), supportFileExtensions[0]);
};
const webFileFindEngine = (folderPath) => {
    try {
        const files = fs.readdirSync(folderPath);
        const fullFileExtension = supportFileExtensions.map(ext => '.' + ext);
        const filteredFiles = [];
        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            const isDirectory = fs.statSync(filePath).isDirectory();
            if (isDirectory) {
                const subFolderFiles = webFileFindEngine(filePath);
                subFolderFiles.forEach(subFile => {
                    filteredFiles.push(path.join(file, subFile).split('\\').join('/')); // Alt klasördeki dosya yolunu, ana klasör yoluna ekleyerek dosyları benzersiz yapıyoruz sonda ise diğer işletim sistemlerien uygun hale getiriyoruz
                });
            }
            else {
                for (const ffn of fullFileExtension) {
                    if (file.endsWith(ffn)) {
                        filteredFiles.push(file);
                        break;
                    }
                }
            }
        });
        return filteredFiles;
    }
    catch (error) {
        console.log('error: ', error.message);
        return [];
    }
};
export default webFileFindEngine;
