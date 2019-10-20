// @flow
import React from 'react';
import {Box} from 'dcme-style/src/deprecated';
import {Link} from 'dcme-style/src/deprecated';
import {Text} from 'dcme-style/src/deprecated';
import DeadEndPage from '../../../component/DeadEndPage';

export default () => <DeadEndPage
    title={() => <Text element="h1" modifier="sizeTera center">Almost there</Text>}
    content={() => <Box>
        <Text element="p" modifier="monospace center margin">
            This page has moved <Link href="http://github.com/dxinteractive/ResponsiveAnalogRead">here</Link>.
        </Text>
    </Box>}
/>;
