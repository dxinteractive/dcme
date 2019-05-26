// @flow
import React from 'react';
import Layout from 'layout/Layout';
import Markdown from './blend2.mdx';
import ContentNav from 'shape/ContentNav';

export default () => <Layout
    title="Blend2"
    modifier="defaultBackground"
>
    <ContentNav
        content={() => <Markdown />}
        pageNav={[
            '# Blend2',
            'Blend2 schematic',
            'Blend2 veroboard layout',
            'Blend2 control schematic'
        ]}
    />
</Layout>;
