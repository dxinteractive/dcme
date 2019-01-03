// @flow
import React from 'react';
import {Text} from 'dcme-style';

import DeadEndPage from '../component/DeadEndPage';
import Link from '../component/Link';

export default () => <DeadEndPage
    title={() => <Text element="h1" modifier="sizeTera center">404</Text>}
    content={() => <Text element="p" modifier="monospace center margin">
        There's nothing here. Try heading back to the <Link to="/">homepage</Link>.
    </Text>}
/>;
