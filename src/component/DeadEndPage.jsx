// @flow
import type {Node} from 'react';
import React from 'react';
import {Box} from 'dcme-style';
import {CenteredLanding} from 'dcme-style';
import {Wrapper} from 'dcme-style';
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
