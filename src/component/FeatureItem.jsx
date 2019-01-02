// @flow
import type {Node} from "react";

import React from "react";
import {Box} from 'dcme-style';
import {Grid} from 'dcme-style';
import {GridItem} from 'dcme-style';
import {Image} from 'dcme-style';
import {Link} from 'dcme-style';
import {Text} from 'dcme-style';
import GithubVersion from './GithubVersion';

import filter from 'unmutable/lib/filter';
import identity from 'unmutable/lib/identity';
import interpose from 'unmutable/lib/interpose';
import pipeWith from 'unmutable/lib/pipeWith';

type Props = {
    alt?: boolean,
    description?: Node,
    docs?: string,
    github?: string,
    image?: any,
    link?: string,
    name: string,
    npm?: string,
    url: string
};

export default ({alt, description, docs, github, image, link, name, npm, url}: Props): Node => {

    let links = pipeWith(
        [
            <Link key="1" href={url}><Text modifier="sizeMega">{name}</Text></Link>,
            link && <Link key="2" modifier="secondary" href={url}>{link}</Link>,
            github && <Link key="3" modifier="secondary" href={`https://github.com/${github}`}>github</Link>,
            docs && <Link key="4" modifier="secondary" href={docs}>docs</Link>,
            github && npm && false && <Link key="5" modifier="secondary" href={`https://www.npmjs.com/package/${npm}`}><GithubVersion repo={github} /></Link>
        ],
        filter(identity()),
        interpose(" | ")
    );

    if(alt) {
        return <Box modifier="paddingBottom">
            <Grid>
                <GridItem modifier="padding">
                    <Text element="div" modifier="margin monospace">{links}</Text>
                    {description && <Text element="div" modifier="margin monospace">{description}</Text>}
                </GridItem>
                {image &&
                    <GridItem modifier="3 padding">
                        <Box modifier="paddingTopKilo">
                            <Link href={url}>
                                <Image src={image} />
                            </Link>
                        </Box>
                    </GridItem>
                }
            </Grid>
        </Box>;
    }

    return <Box modifier="paddingBottom">
        <Grid>
            {image &&
                <GridItem modifier="3 padding">
                    <Link href={url}>
                        <Image src={image} />
                    </Link>
                </GridItem>
            }
            <GridItem modifier="padding">
                <Box>
                    <Text element="div" modifier="margin monospace">{links}</Text>
                    {description && <Text element="div" modifier="margin monospace">{description}</Text>}
                </Box>
            </GridItem>
        </Grid>
    </Box>;
};
