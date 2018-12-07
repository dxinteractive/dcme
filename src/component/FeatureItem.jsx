// @flow
import type {Node} from "react";

import React from "react";
import {Box} from 'dcme-style';
import {Grid} from 'dcme-style';
import {GridItem} from 'dcme-style';
import {Image} from 'dcme-style';
import {Link} from 'dcme-style';
import {Text} from 'dcme-style';
import SiteNavigation from './SiteNavigation';

import filter from 'unmutable/lib/filter';
import identity from 'unmutable/lib/identity';
import interpose from 'unmutable/lib/interpose';
import pipeWith from 'unmutable/lib/pipeWith';

type Props = {
    description: Node,
    github?: string,
    image: any,
    name: string,
    npm?: string,
    url: string
};

export default ({description, github, image, name, npm, url}: Props): Node => {

    let links = pipeWith(
        [
            <Link href={url}><Text modifier="sizeMega">{name}</Text></Link>,
            github && <Link modifier="secondary" href={`https://github.com/${github}`}>github</Link>,
            npm && <Link modifier="secondary" href={`https://www.npmjs.com/package/${npm}`}>v0.17.0</Link>
        ],
        filter(identity()),
        interpose(" | ")
    );

    return <Box modifier="paddingBottom">
        <Grid>
            <GridItem modifier="3 padding">
                <Link href={url}>
                    <Image src={image} />
                </Link>
            </GridItem>
             <GridItem modifier=" padding">
                <Box>
                    <Text element="div" modifier="margin monospace">{links}</Text>
                    <Text element="div" modifier="margin monospace">{description}</Text>
                </Box>
            </GridItem>
        </Grid>
    </Box>;
}
