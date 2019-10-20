// @flow
import React from 'react';
import {Box} from 'dcme-style/src/deprecated';
import {Text} from 'dcme-style/src/deprecated';
import DeadEndPage from '../../component/DeadEndPage';
import Link from '../../component/Link';

export default () => <DeadEndPage
    title={() => <Text element="h1" modifier="sizeTera center">Almost there</Text>}
    content={() => <Box>
        <Text element="p" modifier="monospace center margin">
            This page has moved <Link to="/#Animation">here</Link>.
        </Text>
    </Box>}
/>;
