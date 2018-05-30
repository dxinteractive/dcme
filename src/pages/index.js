// @flow
import React from 'react';
import type {Node} from 'react';
import {Box, Landing, Text} from '../style';
//import Link from 'gatsby-link';
//    <Link to="/page-2/">Go to page 2</Link>

export default (): Node => {
    return <Landing>
        <Box>
            <Text element="h1" modifier="sizeGiga">damienclarke.me</Text>
            <Text element="p" modifier="margin">Welcome to your new Gatsby site.</Text>
        </Box>
    </Landing>;
};
