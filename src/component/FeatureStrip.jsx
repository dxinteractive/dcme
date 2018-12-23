// @flow
import type {Node} from "react";

import React from "react";
import {Box} from 'dcme-style';
import {Grid} from 'dcme-style';
import {GridItem} from 'dcme-style';
import {Image} from 'dcme-style';
import {Link} from 'dcme-style';
import {Text} from 'dcme-style';

const ImageLink = ({imageLink}: any): Node => {
    return <Link href={imageLink.link}>
        <Image src={imageLink.image} />
    </Link>;
};

type Props = {
    description?: Node,
    images: Array<{image: string, link: string}>,
    name: string,
    url?: string
};

export default ({description, images, name, url}: Props): Node => {
    return <Box modifier="paddingBottomGiga">
        <Text element="div" modifier="margin monospace">
            {url ? <Link href={url}><Text modifier="sizeMega">{name}</Text></Link> : <Text modifier="sizeMega primary">{name}</Text>}
        </Text>
        {description && <Text element="div" modifier="margin monospace">{description}</Text>}
        <Grid>
            <GridItem modifier="6">
                <Grid>
                    <GridItem modifier="6 always">
                        <ImageLink imageLink={images[0]} />
                    </GridItem>
                    <GridItem modifier="6 always">
                        <ImageLink imageLink={images[1]} />
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem modifier="6">
                <Grid>
                    <GridItem modifier="6 always">
                        <ImageLink imageLink={images[2]} />
                    </GridItem>
                    <GridItem modifier="6 always">
                        <ImageLink imageLink={images[3]} />
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    </Box>;
};
