// @flow
import type {Node} from 'react';
import React from 'react';
import {Box} from 'dcme-style/src/deprecated';
import {CenteredLanding} from 'dcme-style/src/deprecated';
import {Wrapper} from 'dcme-style/src/deprecated';
import Layout from '../layout/Layout';

type Props = {
    content: () => Node,
    title: () => Node
};

export default ({title, content}: Props) => <Layout>
    <Wrapper>
        <Box modifier="invertedCopy invertedBackground">
            <CenteredLanding
                top={title}
                bottom={content}
            />
        </Box>
    </Wrapper>
</Layout>;
