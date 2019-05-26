// @flow
import React from 'react';
import Layout from 'layout/Layout';
import Markdown from './ctrl.mdx';
import ContentNav from 'shape/ContentNav';

export default () => <Layout
    title="CTRL"
    modifier="defaultBackground"
>
    <ContentNav
        content={() => <Markdown />}
        pageNav={[
            '# CTRL'
        ]}
    />
</Layout>;
