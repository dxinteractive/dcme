// @flow
import type {Node} from 'react';
import React from 'react';
import SpruceClassName from 'react-spruce/lib/SpruceClassName';

export default function CenteredLanding(props: *): Node {
    const {
        className,
        modifier,
        spruceName: name = 'CenteredLanding',
        top,
        bottom,
        ...otherProps
    } = props;

    const parentClassName = SpruceClassName({className, modifier, name});
    const childClassName = (child) => SpruceClassName({className, modifier, name: `${name}_${child}`});

    return <div className={parentClassName} {...otherProps}>
        <div className={childClassName("topContainer")}>
            <div className={childClassName("top")}>{top()}</div>
        </div>
        <div className={childClassName("bottom")}>{bottom()}</div>
    </div>;
}
