// @flow
import React from 'react';
import {Box, CenteredLanding, Grid, GridItem, Link as HtmlLink, Image, NavigationList, NavigationListItem, Text, Typography, Wrapper} from 'dcme-style';
import Link from '../component/Link';
import PageLayout from '../component/PageLayout';
import Layout from '../layout/Layout';
import IndexMarkdown from './index.md';

export default () => <Layout>
    <Box modifier="invertedCopy invertedBackground">
        <Wrapper>
            <CenteredLanding
                modifier="heightHalf"
                top={() => <Text element="h1" modifier="sizeTera superDuper">damienclarke.me</Text>}
                bottom={() => <PageLayout
                content={() => <Box>
                        <Typography>
                            <IndexMarkdown />
                        </Typography>
                    </Box>}
                    nav={() => <NavigationList>
                        <NavigationListItem><HtmlLink href={`#What-is-it`}>What is it?</HtmlLink></NavigationListItem>
                        <NavigationListItem><HtmlLink href={`#Inspiration`}>Inspiration</HtmlLink></NavigationListItem>
                        <NavigationListItem><HtmlLink href={`#Getting-Started`}>Getting Started</HtmlLink></NavigationListItem>
                        <NavigationListItem><HtmlLink href={`#API`}>API</HtmlLink></NavigationListItem>
                    </NavigationList>}
                />}
            />
        </Wrapper>
    </Box>
</Layout>;
