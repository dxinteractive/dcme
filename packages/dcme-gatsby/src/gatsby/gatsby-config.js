/* eslint-disable */
module.exports = {
    gatsbyConfig: ({compileModules}) => ({
        plugins: [
            {
                resolve: `gatsby-plugin-compile-es6-packages`,
                options: {
                    modules: compileModules,
                    test: /\.jsx?$/
                }
            },
            'gatsby-plugin-resolve-src',
            `gatsby-plugin-styled-components`,
            `gatsby-plugin-flow`,
            {
                resolve: `gatsby-plugin-mdx`,
                options: {
                    extensions: ['.mdx', '.md'],
                    gatsbyRemarkPlugins: [
                        {
                            resolve: `gatsby-remark-prismjs`,
                            options: {
                                noInlineHighlight: true
                            }
                        }
                    ],
                    // defaultLayouts: {
                    //     pages: require.resolve('./src/components/MainLayout'),
                    //     posts: require.resolve('./src/components/PostLayout')
                    // },
                    remarkPlugins: [
                        [
                            require('remark-external-links'),
                            {
                                content: {
                                    type: 'text',
                                    value: '' // TODO make this open in new window
                                }
                            }
                        ]
                    ],
                    rehypePlugins: [
                        require('rehype-slug')
                    ]
                }
            }
        ]
    })
};
