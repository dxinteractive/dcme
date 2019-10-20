// @flow
import type {Node} from "react";

import React from "react";
import {Fragment} from "react";
import {Anchor} from 'dcme-style/src/deprecated';
import {Box} from 'dcme-style/src/deprecated';
import {Grid} from 'dcme-style/src/deprecated';
import {GridItem} from 'dcme-style/src/deprecated';
import {Link as HtmlLink} from 'dcme-style/src/deprecated';
import {Text} from 'dcme-style/src/deprecated';
import {ImageThumbnail} from 'dcme-style/src/deprecated';

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
            <ImageThumbnail src={image} modifier="16-9" />
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
    href?: string,
    images: Array<{image: string, link?: string, to?: string}>,
    link?: string,
    name: string
};

export default ({description, href, images, link, name}: Props): Node => {
    return <Box modifier="paddingBottomGiga">
        <Anchor name={name} />
        <Text element="div" modifier="margin monospace">
            {href ? <HtmlLink href={href}><Text modifier="sizeMega">{name}</Text></HtmlLink> : <Text modifier="sizeMega primary">{name}</Text>}
            {link && <Text> |{'\u00A0'}<HtmlLink href={href} modifier="secondary">{link}</HtmlLink></Text>}
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
