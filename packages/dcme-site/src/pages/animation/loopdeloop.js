// @flow
import React from 'react';
import Layout from 'layout/Layout';
import Markdown from './loopdeloop-mdx.mdx';
import ContentNav from 'shape/ContentNav';

export default () => <Layout
    title="Loopdeloop submissions"
    modifier="defaultBackground"
>
    <ContentNav
        content={() => <Markdown />}
        pageNav={[
            '# Loopdeloop submissions',
            'Dog',
            'Mad',
            'Dance',
            'Fun',
            'Idiots',
            'Light'
        ]}
    />
</Layout>;
