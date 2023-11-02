import fs from 'fs';
import path from 'path';
export function fileExistController(url, generate = true) {
    const pathResolve = generate ? path.resolve(url) : url;
    try {
        if (fs.existsSync(pathResolve)) {
            return pathResolve;
        }
        else {
            return false;
        }
    }
    catch (error) {
        new Error(`There is a problem error code: ${error}`);
    }
}
