// @flow
import type {Node} from 'react';

import React from 'react';

import Box from 'react-goose/lib/position/Box';
import Grid from 'react-goose/lib/position/Grid';
import GridItem from 'react-goose/lib/position/GridItem';
import Image from 'react-goose/lib/Image';
import Text from 'react-goose/lib/Text';
import Wrapper from 'react-goose/lib/position/Wrapper';
import CenteredLanding from './CenteredLanding';

type Props = {
    title: () => Node,
    description?: () => Node,
    links?: () => Node,
    logo?: string,
    height?: string
};

export default ({title, description, links, logo, height}: Props): Node => {
    return <Box className="DocsHeader" modifier="invertedCopy invertedBackground">
        <Wrapper>
            <CenteredLanding
                modifier={height || 'heightHalf'}
                top={title}
                bottom={() => <Grid>
                    <GridItem modifier="8 padding">
                        {description &&
                            <Text element="p" modifier="monospace margin">{description()}</Text>
                        }
                        {links &&
                            <Text element="p" modifier="monospace">{links()}</Text>
                        }
                    </GridItem>
                    <GridItem modifier="4 padding">
                        {logo && <Image className="DocsHeader_logo" src={logo} />}
                    </GridItem>
                </Grid>}
            />
        </Wrapper>
    </Box>;
};
