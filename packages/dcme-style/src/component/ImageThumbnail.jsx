// @flow
import type {Node} from 'react';
import React from 'react';
import SpruceClassName from 'react-spruce/lib/SpruceClassName';

export default function ImageThumbnail(props: *): Node {
    const {
        className,
        modifier,
        spruceName: name = 'ImageThumbnail',
        src,
        ...otherProps
    } = props;

    const classNames = SpruceClassName({className, modifier, name});

    return <div
        className={classNames}
        style={{backgroundImage: `url(${src})`}}
        {...otherProps}
    />;
}
