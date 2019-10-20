// @flow
import React from 'react';
import {toAnchor} from '../shape/ContentNav';

type Props = {
    name: string
};

export default (props: Props) => <a id={toAnchor(props.name)} />;
