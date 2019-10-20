/* eslint-disable */

export const onCreateWebpackConfig = ({loaders, actions}) => {
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
    }
  });
}
