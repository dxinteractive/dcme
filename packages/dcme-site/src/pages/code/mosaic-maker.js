// @flow
import React from 'react';
import {Box} from 'dcme-style/src/deprecated';
import {Link} from 'dcme-style/src/deprecated';
import {Text} from 'dcme-style/src/deprecated';

import DeadEndPage from '../../component/DeadEndPage';

export default () => <DeadEndPage
    title={() => <Text element="h1" modifier="sizeTera center">Mosaic Maker</Text>}
    content={() => <Box>
        <Text element="p" modifier="monospace center margin">
            As Adobe Flash Player is becoming increasingly unavailable in all major browsers, you may become unable to use mosaic maker. <Link href="/assets/mosaic.html">Follow this link and cross your fingers</Link>.
        </Text>
    </Box>}
/>;
