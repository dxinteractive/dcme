// @flow
import React from 'react';
import {Box} from 'dcme-style';
import {Text} from 'dcme-style';

import DeadEndPage from '../../component/DeadEndPage';

export default () => <DeadEndPage
    title={() => <Text element="h1" modifier="sizeTera center">It's gone</Text>}
    content={() => <Box>
        <Text element="p" modifier="monospace center margin">
            Mosaic maker is no longer available, as Adobe Flash is becoming increasingly unavailable. I have no plans to remake this.
        </Text>
        <Text element="p" modifier="monospace center margin">
            Thanks for using it. It was fun while it lasted.
        </Text>
    </Box>}
/>;
