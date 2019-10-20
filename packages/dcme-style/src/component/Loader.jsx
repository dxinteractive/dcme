// @flow
import type {Node} from 'react';
import React from 'react';
import SpruceClassName from 'react-spruce/lib/SpruceClassName';

export default function Loader(props: *): Node {
    const {
        className,
        modifier,
        spruceName: name = 'Loader',
        ...otherProps
    } = props;

    const parentClassName = SpruceClassName({className, modifier, name});

    return <span className={parentClassName} {...otherProps} />;
}
