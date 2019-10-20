// @flow
import React from 'react';
import Layout from 'layout/Layout';
import Markdown from './bazz-fuzz-face-mdx.mdx';
import ContentNav from 'shape/ContentNav';

export default () => <Layout
    title="Bazz Fuzz Face"
    modifier="defaultBackground"
>
    <ContentNav
        content={() => <Markdown />}
        pageNav={[
            '# Bazz Fuzz Face',
            'Bazz Fuzz Face Schematic',
            'Bazz Fuss',
            'Fuzz Face'
        ]}
    />
</Layout>;
