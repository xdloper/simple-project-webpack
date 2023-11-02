import webpack from 'webpack';
import {merge} from 'webpack-merge';
import {pluginConfig} from './plugin/plugins.js';

import WEBPACK_MAIN_CONFIG from './webpack.config.main.js';
import {__OUTPUT_DIST_PROD__} from './utils/constants/index.js';


// plugin config nedense tip uyuşmazlığı tespit ediyor çözmek gerek 
const getWebpackConfig = (pluginConfig : any /*webpack.Configuration['plugins']*/) : webpack.Configuration => {
     return {
          //watch: true,
          mode: 'production',
          plugins:[
               ...pluginConfig,
          ],
          output:{
               path:__OUTPUT_DIST_PROD__,
               filename: 'script/main.[hash].js',
               assetModuleFilename:'media/[name][hash][ext][query]'
          }
     }
}

export default (env: any, args: any)=>{
     const mergedConfig = getWebpackConfig(pluginConfig);
     return merge(WEBPACK_MAIN_CONFIG,mergedConfig);
};