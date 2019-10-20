// @flow
import type {Node} from 'react';

import styled from 'styled-components';
import React from 'react';
import {Link} from 'gatsby';

type Props = {
    children: any,
    to?: string,
    href?: string,
    target?: string, // for href
    onClick?: Function,
    className?: string,
    exact?: boolean, // for navLink
    block?: boolean
};

export const Clickable = styled((props: Props): Node => {
    const {children, className, onClick, to, href, target, block} = props;
    const childProps = {children, className, onClick};

    if(to) {
        return <Link to={to} {...childProps} />;
    }
    if(href) {
        return <a href={href} target={target} {...childProps} />;
    }
    let button = <button {...childProps} type="button" />;
    return block ? <div>{button}</div> : button;
})`
    cursor: pointer;
    color: inherit;
    background-color: inherit;
    ${props => props.block && `width: 100%;`}
`;
