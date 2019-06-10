// @flow
import React from 'react';
import Layout from 'layout/Layout';
import Markdown from './skate-tricks.mdx';
import ContentNav from 'shape/ContentNav';

export default () => <Layout
    title="Skate tricks"
    modifier="defaultBackground"
>
    <ContentNav
        content={() => <Markdown />}
        pageNav={[
            '# Skate tricks'
        ]}
    />
</Layout>;
