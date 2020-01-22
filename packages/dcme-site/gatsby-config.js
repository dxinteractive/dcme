// @flow
const {gatsbyConfig} = require('dcme-gatsby/src/gatsby/gatsby-config');

module.exports = {
    siteMetadata: {
        title: 'damienclarke.me'
    },
    ...gatsbyConfig({
        compileModules: [`dcme-gatsby`, `dcme-style`],
        updatePlugins: (plugins) => ['gatsby-plugin-sass', ...plugins],
    })
};
