// @flow
import type {ComponentType} from 'react';
import type {Node} from 'react';

import React from 'react';
import {Box} from 'dcme-style';
import {Typography} from 'dcme-style';
import {Wrapper} from 'dcme-style';
import Layout from '../layout/Layout';
import PageLayout from '../component/PageLayout';

type Props = {
    markdown: ComponentType<*>,
    title?: string
};

export default ({markdown, title}: Props): Node => {
    let Markdown = markdown;
    return <Layout title={title}>
        <Box modifier="defaultBackground">
            <Wrapper>
                <Box modifier="paddingBottomTera">
                    <PageLayout content={() => {
                        return <Typography>
                            <Markdown />
                        </Typography>;
                    }}
                    />
                </Box>
            </Wrapper>
        </Box>
    </Layout>;
};
