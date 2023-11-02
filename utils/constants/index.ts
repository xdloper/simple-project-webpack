import path from 'path'
import {fileExistController} from '../helpers/fileExistController.js'
import {filePathFinder} from '../helpers/filePathFinder.js'

// GLOBAL CONSTANTS
export const __RELATIVE_PATH__:string = '../..'
export const __SOURCE__:string = 'src'
export const __INDEXJS__:string = 'index.js'
export const __PUBLIC__:string = 'public'
export const __DIST__:string = 'dist'

export const __MAIN__:string = path.resolve()
export const __MAIN_SOURCE__:string = path.resolve(__SOURCE__)

export const __ENV_PATH__: Array<string> = filePathFinder({URL:__RELATIVE_PATH__,fileName:".env",ignore:['node_modules']})  
export const __SUPPORT_EXT_ARR__:Array<string> = [
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
]

export const __INPUT_PATH__:string | false = fileExistController(path.resolve(__RELATIVE_PATH__,__SOURCE__,__INDEXJS__),false)
export const __INPUT_SEC_PATH__:string =  path.resolve(__SOURCE__,__INDEXJS__)

export const __OUTPUT_DIST_DEV__:string = path.resolve(__RELATIVE_PATH__,__DIST__,'assets')
export const __OUTPUT_DIST_PROD__:string = path.resolve(__RELATIVE_PATH__,__DIST__,__PUBLIC__)

export const __WEB_PLUGIN_TEMPLATE__:string = path.resolve(__SOURCE__,__PUBLIC__);
export const __WEB_FILE_PATH__:string | false = fileExistController(path.resolve(__RELATIVE_PATH__,__SOURCE__,__PUBLIC__),false) // this folder path but finder web file so not write file name

export const __WEB_PLUGIN_FAVICON__:string | false = fileExistController(__RELATIVE_PATH__+__WEB_FILE_PATH__+'/icons/favicon.ico') || fileExistController(__SOURCE__+'/'+__PUBLIC__+'/icons/favicon.ico')
export const __WEB_PLUGIN_TEMPLATE_DATA__:string | false = fileExistController('template-engine-data.json') || fileExistController('utils/constants/data/template-engine-data.json')