// @flow
import React from 'react';
import type {Node} from 'react';
import Helmet from 'react-helmet';

import '../style/index.scss';

export default ({children, data}: Object): Node => <div>
    <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Lato|Roboto+Mono|Ubuntu+Mono" rel="stylesheet" />
        <meta name="description" content="Website" />
    </Helmet>
    {children()}
</div>;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
