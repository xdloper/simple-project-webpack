import { merge } from 'webpack-merge';
import WEBPACK_MAIN_CONFIG from './webpack.config.main.js';
import { pluginConfig } from './plugin/plugins.js';
import { __OUTPUT_DIST_DEV__ } from './utils/constants/index.js';
// plugin config nedense tip uyuşmazlığı tespit ediyor çözmek gerek 
const getWebpackConfig = (pluginConfig) => {
    return {
        watch: true,
        devtool: "source-map",
        mode: 'development',
        plugins: [
            ...pluginConfig,
        ],
        output: {
            path: __OUTPUT_DIST_DEV__,
            filename: 'script/main.js',
            assetModuleFilename: 'media/[name][hash][query]',
        },
        /*
        devServer: {
          static: {
            directory: path.join('public'),
          },
          port: 1000,
          hot: true,
          open: true,
        },
        */
    };
};
export default (env, args) => {
    const mergedConfig = getWebpackConfig(pluginConfig);
    return merge(WEBPACK_MAIN_CONFIG, mergedConfig);
};
