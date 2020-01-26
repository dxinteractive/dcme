/* eslint-disable */
var path = require('path');

module.exports = {
    onCreateWebpackConfig: ({dirname}) => ({loaders, actions}) => {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /\.txt$/,
              use: [
                'raw-loader'
              ]
            }
          ]
        },
        resolve: {
          alias: {
            react: path.resolve(dirname, './node_modules/react'),
            'styled-components': path.resolve(dirname, './node_modules/styled-components')
          }
        }
      });
    }
};
