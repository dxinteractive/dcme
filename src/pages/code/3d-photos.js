// @flow
import React from 'react';
import {Box} from 'dcme-style';
import {CenteredLanding} from 'dcme-style';
import {Text} from 'dcme-style';
import {Wrapper} from 'dcme-style';
import Layout from '../../layout/Layout';

export default () => <Layout>
    <Wrapper>
        <Box modifier="invertedCopy invertedBackground">
            <CenteredLanding
                top={() => <Text element="h1" modifier="sizeTera center">It's gone</Text>}
                bottom={() => <Box>
                    <Text element="p" modifier="monospace center margin">
                        3D photo maker is no longer available, as Adobe Flash is becoming increasingly unavailable. I have no plans to remake this.
                    </Text>
                    <Text element="p" modifier="monospace center margin">
                        Thanks for using it. It was fun while it lasted.
                    </Text>
                </Box>}
            />
        </Box>
    </Wrapper>
</Layout>;
