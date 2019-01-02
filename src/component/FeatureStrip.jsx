// @flow
import type {Node} from "react";

import React from "react";
import {Fragment} from "react";
import {Box} from 'dcme-style';
import {Grid} from 'dcme-style';
import {GridItem} from 'dcme-style';
import {Link as HtmlLink} from 'dcme-style';
import {Text} from 'dcme-style';

import Thumbnail from '../component/Thumbnail';
import Link from 'gatsby-link';

const ThumbnailLink = ({imageLink}: any): Node => {
    let {
        description,
        image,
        link,
        to
    } = imageLink;

    let content = <Fragment>
        <Box modifier="marginBottom">
            <Thumbnail src={image}/>
        </Box>
        {description && <Text element="div" modifier="monospace link secondary">{description}</Text>}
    </Fragment>;

    if(link) {
        return <a href={link}>{content}</a>;
    }

    if(to) {
        return <Link to={to}>{content}</Link>;
    }

    return content;
};

type Props = {
    description?: Node,
    images: Array<{image: string, link?: string, to?: string}>,
    name: string,
    url?: string
};

export default ({description, images, name, url}: Props): Node => {
    return <Box modifier="paddingBottomGiga">
        <Text element="div" modifier="margin monospace">
            {url ? <HtmlLink href={url}><Text modifier="sizeMega">{name}</Text></HtmlLink> : <Text modifier="sizeMega primary">{name}</Text>}
        </Text>
        {description && <Text element="div" modifier="margin monospace">{description}</Text>}
        <Grid>
            <GridItem modifier="6 paddingMilli stackedMargin">
                <Grid>
                    <GridItem modifier="6 always paddingMilli">
                        <ThumbnailLink imageLink={images[0]} />
                    </GridItem>
                    <GridItem modifier="6 always paddingMilli">
                        <ThumbnailLink imageLink={images[1]} />
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem modifier="6 paddingMilli stackedMargin">
                <Grid>
                    <GridItem modifier="6 always paddingMilli">
                        <ThumbnailLink imageLink={images[2]} />
                    </GridItem>
                    <GridItem modifier="6 always paddingMilli">
                        <ThumbnailLink imageLink={images[3]} />
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    </Box>;
};
