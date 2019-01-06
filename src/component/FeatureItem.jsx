// @flow
import type {Node} from "react";

import React from "react";
import Link from './Link';
import {Box} from 'dcme-style';
import {Grid} from 'dcme-style';
import {GridItem} from 'dcme-style';
import {Image} from 'dcme-style';
import {Link as HtmlLink} from 'dcme-style';
import {Text} from 'dcme-style';
import GithubVersion from './GithubVersion';

import filter from 'unmutable/lib/filter';
import identity from 'unmutable/lib/identity';
import interpose from 'unmutable/lib/interpose';
import pipeWith from 'unmutable/lib/pipeWith';

type Props = {
    alt?: boolean,
    bandcamp?: string,
    description?: Node,
    docs?: string,
    github?: string,
    href?: string,
    image?: any,
    link?: string,
    name: string,
    npm?: string,
    to?: string
};

export default ({alt, bandcamp, description, docs, github, href, image, link, name, npm, to}: Props): Node => {

    let ThisLink = (props) => {
        if(href) {
            return <HtmlLink href={href} {...props} />;
        }
        if(to) {
            return <Link to={to} {...props} />;
        }
        return <span {...props} />;
    };

    let links = pipeWith(
        [
            <ThisLink key="1"><Text modifier="sizeMega">{name}</Text></ThisLink>,
            link && <ThisLink key="2" modifier="secondary">{link}</ThisLink>,
            github && <HtmlLink key="3" modifier="secondary" href={`https://github.com/${github}`}>github</HtmlLink>,
            docs && <HtmlLink key="4" modifier="secondary" href={docs}>docs</HtmlLink>,
            bandcamp && <HtmlLink key="5" modifier="secondary" href={bandcamp}>bandcamp</HtmlLink>,
            github && npm && false && <HtmlLink key="6" modifier="secondary" href={`https://www.npmjs.com/package/${npm}`}><GithubVersion repo={github} /></HtmlLink>
        ],
        filter(identity()),
        interpose(<span> |{'\u00A0'}</span>)
    );

    if(alt) {
        return <Box modifier="paddingBottom">
            <Grid>
                <GridItem modifier="padding">
                    <Text element="div" modifier="margin monospace">{links}</Text>
                    {description && <Text element="div" modifier="margin monospace">{description}</Text>}
                </GridItem>
                <GridItem modifier="3 padding">
                    {image &&
                        <Box modifier="paddingTopKilo">
                            <ThisLink>
                                <Image src={image} modifier="center" />
                            </ThisLink>
                        </Box>
                    }
                </GridItem>
            </Grid>
        </Box>;
    }

    return <Box modifier="paddingBottom">
        <Grid>
            {image &&
                <GridItem modifier="3 padding">
                    <ThisLink>
                        <Image src={image} modifier="center icon" />
                    </ThisLink>
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
