// @flow
import type {Node} from "react";

import React from "react";
import Text from 'react-goose/lib/Text';

type Props = {
    children: string
};

export default ({children}: Props): Node => {
    return <Text element="h2" id={children} modifier="sizeMega marginMega weightMicro">{children}</Text>;
};
