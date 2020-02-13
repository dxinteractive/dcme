// @flow
import type {Node} from "react";

import React from "react";
import Link from './Link';
import {Anchor} from 'dcme-style/src/deprecated';
import {Box} from 'dcme-style/src/deprecated';
import {Grid} from 'dcme-style/src/deprecated';
import {GridItem} from 'dcme-style/src/deprecated';
import {Image} from 'dcme-style/src/deprecated';
import {Link as HtmlLink} from 'dcme-style/src/deprecated';
import {Text} from 'dcme-style/src/deprecated';
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
    to?: string,
    smaller?: boolean
};

export default ({alt, bandcamp, description, docs, github, href, image, link, name, npm, to, smaller}: Props): Node => {

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
            <ThisLink key="1"><Text modifier={smaller ? 'sizeKilo' : 'sizeMega'}>{name}</Text></ThisLink>,
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
            <Anchor name={name} />
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
        <Anchor name={name} />
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
            {!image &&
                <GridItem modifier="3 padding" />
            }
        </Grid>
    </Box>;
};
