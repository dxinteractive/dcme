//@flow
module.exports = {
    siteMetadata: {
        title: 'Damien Clarke'
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/docs`,
                name: 'markdown-pages'
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    `gatsby-remark-prismjs`
                ]
            }
        }
    ]
};
