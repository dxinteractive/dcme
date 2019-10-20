// @flow
import React from "react";
import Text from 'react-goose/lib/Text';

type Props = {
    children: any
};

export default ({children}: Props) => <Text modifier="codeClear primary weight">{children}</Text>;
