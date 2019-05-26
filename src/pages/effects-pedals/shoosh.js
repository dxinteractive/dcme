// @flow
import React from 'react';
import Layout from 'layout/Layout';
import Markdown from './shoosh.mdx';
import ContentNav from 'shape/ContentNav';

export default () => <Layout
    title="Shoosh"
    modifier="defaultBackground"
>
    <ContentNav
        content={() => <Markdown />}
        pageNav={[
            '# Shoosh',
            'Shoosh schematic',
            'Shoosh veroboard layout'
        ]}
    />
</Layout>;
