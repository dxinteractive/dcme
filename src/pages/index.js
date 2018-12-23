// @flow
import React from 'react';
import {Box} from 'dcme-style';
import {CenteredLanding} from 'dcme-style';
import {Link as HtmlLink} from 'dcme-style';
import {Text} from 'dcme-style';
import {Wrapper} from 'dcme-style';
import Link from '../component/Link';
import PageLayout from '../component/PageLayout';
import FeatureItem from '../component/FeatureItem';
import FeatureStrip from '../component/FeatureStrip';
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
            <Text element="h2" modifier="sizeKilo marginKilo">Animation</Text>
            <FeatureStrip
                name="12gon"
                description={<Text>Hypnontic animated geometry | <HtmlLink modifier="secondary" href="http://12gon.tumblr.com">more</HtmlLink></Text>}
                url="https://12gon.tumblr.com"
                images={[
                    {
                        image: "https://66.media.tumblr.com/d76ccce59cc8c5b1e38328e33ea9a0b0/tumblr_n20913WJ4w1r2xv8po1_500.gif",
                        link: "http://12gon.tumblr.com/post/78733618405/m%C3%B6bius-6hedrons-3d"
                    },
                    {
                        image: "https://66.media.tumblr.com/a4514711dd133f89f612ca463a13d147/tumblr_n59d51P8lV1r2xv8po1_500.gif",
                        link: "http://12gon.tumblr.com/post/85119873523/shatter-3gons"
                    },
                    {
                        image: "https://66.media.tumblr.com/9b2da91be7dc6a5565a1183342cf68b4/tumblr_n5m9osWqzV1r2xv8po1_r1_500.gif",
                        link: "http://12gon.tumblr.com/post/85814750618/fragment-20hedrons"
                    },
                    {
                        image: "https://66.media.tumblr.com/b157baeb534ea7efc053455306c1fa57/tumblr_n1sid9LI9e1r2xv8po1_500.gif",
                        link: "http://12gon.tumblr.com/post/78416765824/breathe-4gons-3d"
                    }
                ]}
            />
            <FeatureStrip
                name="Loopdeloop submissions"
                description={<Text>Loops for <HtmlLink modifier="secondary" href="http://www.loopdeloop.org/">loopdeloop.org</HtmlLink>.</Text>}
                images={[
                    {
                        image: "https://i.vimeocdn.com/video/716159216_780x439.jpg",
                        link: "https://vimeo.com/282191207",
                        description: "dog"
                    },
                    {
                        image: "https://66.media.tumblr.com/tumblr_m9ie2jhzm11r269aho1_500.gif",
                        link: "https://vimeo.com/48289893",
                        description: "mad"
                    },
                    {
                        image: "https://66.media.tumblr.com/92690f8dd1480ed9b88d05f66c3cb0a5/tumblr_mwjus9IjCA1r269aho1_500.gif",
                        link: "https://vimeo.com/165720790",
                        description: "dance"
                    },
                    {
                        image: "https://66.media.tumblr.com/92690f8dd1480ed9b88d05f66c3cb0a5/tumblr_mwjus9IjCA1r269aho1_500.gif",
                        link: "https://vimeo.com/165720790",
                        description: "dance"
                    }
                ]}
            />
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
