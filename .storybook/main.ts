const path = require('path');
// const {
//     argv
// } = require('yargs');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;
const storiesPath = //!argv._[0] ? path.resolve(__dirname, '../src/**/*.@(story|stories).@(js|jsx|ts|tsx)').replace(/\\/g, '/') :
    path.resolve(__dirname, `../src/lib/**/*.@(story|stories).@(js|jsx|ts|tsx)`).replace(/\\/g, '/');

module.exports = {
    features: {
        emotionAlias: false
    },
    // '../../examples/**/*.stories.@(js|jsx|ts|tsx)'
    stories: [storiesPath],
    addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-styling', '@storybook/addon-interactions'],
    webpackFinal: async config => {
        config.resolve = {
            ...config.resolve,
            // plugins: [...(config.resolve.plugins || []), new TsconfigPathsPlugin({
            //     extensions: ['.ts', '.tsx', '.js', '.jsx'],
            //     configFile: path.join(__dirname, '../tsconfig.json')
            // })],
            fallback: {
                fs: false,
                timers: false,
                tty: false,
                os: false,
                http: false,
                https: false,
                zlib: false,
                util: false,
                ...config.resolve.fallback,
            }
        };
        return config;
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {
        autodocs: true
    },
    core: {
        builder: "webpack5",
    },
};