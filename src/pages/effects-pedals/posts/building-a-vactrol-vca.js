// @flow
import React from 'react';
import Layout from 'layout/Layout';
import Markdown from './building-a-vactrol-vca.mdx';
import ContentNav from 'shape/ContentNav';

export default () => <Layout
    title="Building a Vactrol VCA"
    modifier="defaultBackground"
>
    <ContentNav
        content={() => <Markdown />}
        pageNav={[
            '# Building a Vactrol VCA',
            'The amplifier',
            'The vactrol',
            'The transconductance amplifier',
            'Other notes',
            'A finished build'
        ]}
    />
</Layout>;
