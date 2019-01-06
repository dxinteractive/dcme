// @flow
import type {Node} from "react";
import React from "react";
import {Box, Grid, GridItem} from 'dcme-style';
import SiteNavigation from './SiteNavigation';

type Props = {
    content: () => Node,
    nav?: () => Node,
    navFirst?: boolean,
    modifier?: string
};

export default ({content, nav, navFirst}: Props): Node => {
    if(navFirst) {
        return <Grid>
            <GridItem modifier="3 padding push9">
                <Box modifier="paddingBottomMega">
                    <SiteNavigation />
                </Box>
                {nav && nav()}
            </GridItem>
            <GridItem modifier="9 padding pull3">
                {content()}
            </GridItem>
        </Grid>;
    }

    return <Grid>
        <GridItem modifier="9 padding">
            {content()}
        </GridItem>
        <GridItem modifier="3 padding">
            <Box modifier="paddingBottomMega">
                <SiteNavigation />
            </Box>
            {nav && nav()}
        </GridItem>
    </Grid>;
};
