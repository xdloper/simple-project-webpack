import path from 'path';
import { fileExistController } from '../helpers/fileExistController.js';
// GLOBAL CONSTANTS
export const __RELATIVE_PATH__ = '../..';
export const __SOURCE__ = 'src';
export const __INDEXJS__ = 'index.js';
export const __PUBLIC__ = 'public';
export const __DIST__ = 'dist';
export const __MAIN__ = path.resolve();
export const __MAIN_SOURCE__ = path.resolve(__SOURCE__);
export const __ENV_PATH__ = fileExistController(path.resolve('.env'));
export const __SUPPORT_EXT_ARR__ = [
    '.ts',
    '.tsx',
    '.js',
    '.jsx',
    '.ttf',
    '.eot',
    '.otf',
    '.svg',
    '.png',
    '.woff',
    '.woff2',
    '.css',
    '.scss',
    '.sass',
];
export const __INPUT_PATH__ = fileExistController(path.resolve(__RELATIVE_PATH__, __SOURCE__, __INDEXJS__), false);
export const __INPUT_SEC_PATH__ = path.resolve(__SOURCE__, __INDEXJS__);
export const __OUTPUT_DIST_DEV__ = path.resolve(__RELATIVE_PATH__, __DIST__, 'assets');
export const __OUTPUT_DIST_PROD__ = path.resolve(__RELATIVE_PATH__, __DIST__, __PUBLIC__);
export const __WEB_PLUGIN_TEMPLATE__ = path.resolve(__SOURCE__, __PUBLIC__);
export const __WEB_FILE_PATH__ = fileExistController(path.resolve(__RELATIVE_PATH__, __SOURCE__, __PUBLIC__), false); // this folder path but finder web file so not write file name
export const __WEB_PLUGIN_FAVICON__ = fileExistController(__RELATIVE_PATH__ + __WEB_FILE_PATH__ + '/icons/favicon.ico') || fileExistController(__SOURCE__ + '/' + __PUBLIC__ + '/icons/favicon.ico');
export const __WEB_PLUGIN_TEMPLATE_DATA__ = fileExistController('template-engine-data.json') || fileExistController('utils/constants/data/template-engine-data.json');
