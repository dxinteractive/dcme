// @flow
import React from 'react';
import Layout from 'layout/Layout';
import Markdown from './shuffler.mdx';
import ContentNav from 'shape/ContentNav';

export default () => <Layout
    title="Shuffler"
    modifier="defaultBackground"
>
    <ContentNav
        content={() => <Markdown />}
        pageNav={[
            '# Shuffler'
        ]}
    />
</Layout>;
