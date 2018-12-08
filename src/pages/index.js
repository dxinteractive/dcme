// @flow
import React from 'react';
import {Box} from 'dcme-style';
import {CenteredLanding} from 'dcme-style';
import {Text} from 'dcme-style';
import {Wrapper} from 'dcme-style';
import Link from '../component/Link';
import PageLayout from '../component/PageLayout';
import FeatureItem from '../component/FeatureItem';
import Layout from '../layout/Layout';
import IconParcel from '../content/parcelinverted.gif';

export default () => {

    let content = () => <Box>
        <Box modifier="paddingBottomTera">
            <Text element="h2" modifier="sizeKilo marginKilo">Javascript libraries</Text>
            <FeatureItem
                name="dataparcels"
                url="https://dataparcels.blueflag.codes/"
                github="blueflag/dataparcels"
                npm="react-dataparcels"
                description="A library for editing data structures that works really well with React."
                image={IconParcel}
            />
            <FeatureItem
                name="unmutable"
                url="https://github.com/blueflag/unmutable"
                github="blueflag/unmutable"
                npm="unmutable"
                description="An immutable, point-free, functional data collection library for plain old Javascript."
                image={IconParcel}
            />
        </Box>
        <Box modifier="paddingBottomTera">
            <Text element="h2" modifier="sizeKilo marginKilo">Arduino libraries</Text>
            ...
        </Box>
    </Box>;

    return <Layout>
        <Box modifier="invertedCopy invertedBackground">
            <Wrapper>
                <CenteredLanding
                    modifier="heightThird"
                    top={() => <Text element="h1" modifier="sizeTera superDuper">damienclarke.me</Text>}
                    bottom={() => <Box>
                        <Text element="p" modifier="monospace margin">Software engineer + musician + effect pedal builder + animator living in Melbourne, Australia.</Text>
                    </Box>}
                />
                <PageLayout content={content} />
            </Wrapper>
        </Box>
    </Layout>;
};
