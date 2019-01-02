// @flow
import type {Node} from 'react';

import React from 'react';
import {Box} from 'dcme-style';
import {Text} from 'dcme-style';
import {Typography} from 'dcme-style';
import {Wrapper} from 'dcme-style';
import Layout from '../layout/Layout';
import PageLayout from '../component/PageLayout';

type Props = {
    markdown: Node,
    title: Node
};

export default ({markdown: Markdown, title}: Props) => <Layout>
    <Wrapper>
        <Box modifier="invertedCopy invertedBackground paddingTopGiga paddingBottomTera">
            <Text element="h1" modifier="sizeGiga">{title}</Text>
            <PageLayout content={() => <Typography>
                <Markdown />
            </Typography>}
            />
        </Box>
    </Wrapper>
</Layout>;
