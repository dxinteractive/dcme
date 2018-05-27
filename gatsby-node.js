const {createFilePath} = require('gatsby-source-filesystem');
const path = require('path');
const fs = require('fs');

// exports.createPages = ({graphql, boundActionCreators}) => {
//     const {createPage} = boundActionCreators;

//     function createMarkdown() {
//         const blogPostTemplate = path.resolve(`src/templates/MarkdownTemplate.jsx`);

//         return graphql(`
//             {
//               allMarkdownRemark(
//                 sort: { order: DESC, fields: [frontmatter___date] }
//                 limit: 1000
//               ) {
//                 edges {
//                   node {
//                     frontmatter {
//                       path
//                     }
//                   }
//                 }
//               }
//             }
//         `)
//             .then(result => {
//                 if (result.errors) {
//                     return Promise.reject(result.errors);
//                 }

//                 result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//                     if(node.frontmatter.path) {
//                         createPage({
//                             path: node.frontmatter.path,
//                             component: blogPostTemplate,
//                             context: {}, // additional data can be passed via context
//                         });
//                     }
//                 });
//             });
//     }

//     return Promise
//         .resolve()
//         .then(createMarkdown)
//     ;
// };