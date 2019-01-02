// @flow
import React from 'react';
import {Box} from 'dcme-style';
import {CenteredLanding} from 'dcme-style';
import {Text} from 'dcme-style';
import {Wrapper} from 'dcme-style';

import Layout from '../layout/Layout';
import Link from '../component/Link';

export default () => <Layout>
    <Wrapper>
        <Box modifier="invertedCopy invertedBackground">
            <CenteredLanding
                top={() => <Text element="h1" modifier="sizeTera center">404</Text>}
                bottom={() => <Text element="p" modifier="monospace center margin">
                    There's nothing here. Try heading back to the <Link to="/">homepage</Link>.
                </Text>}
            />
        </Box>
    </Wrapper>
</Layout>;
