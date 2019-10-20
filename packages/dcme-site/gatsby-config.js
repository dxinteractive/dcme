// @flow
const {gatsbyConfig} = require('dcme-gatsby/src/gatsby/gatsby-config');

gatsbyConfig.plugins.unshift({
    resolve: `gatsby-plugin-compile-es6-packages`,
    options: {
        modules: [`dcme-gatsby`, `dcme-style`],
        test: /\.jsx?$/
    }
});

gatsbyConfig.plugins.unshift('gatsby-plugin-sass');

module.exports = {
    siteMetadata: {
        title: 'damienclarke.me'
    },
    ...gatsbyConfig
};
