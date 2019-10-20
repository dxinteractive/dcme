// @flow
import React from "react";
import Text from 'react-goose/lib/Text';
import DocsType from './DocsType';

type Props = {
    default?: string,
    name: string,
    optional?: boolean,
    type: string
};

export default ({default: def, name, optional, type}: Props) => <Text element="div" modifier="margin">
    <Text modifier="sizeHecto">{name}</Text> <DocsType>{optional ? "?" : ""}: {type} {def ? `= ${def}` : ""}</DocsType>
</Text>;
