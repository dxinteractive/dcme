// @flow
import type {Node} from 'react';
import React from 'react';
import styled from 'styled-components';
import {layout} from 'styled-system';

type Props = {
    cover?: boolean|number
};

export const Image = styled((props: Props): Node => {
    let Component = props.cover ? 'div' : 'img';
    return <Component {...props} />;
})`
    width: 100%;
    ${layout}

    ${props => props.cover && `
        background-image: url(${props.src});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        ${typeof props.cover === 'number' ? `padding-top: ${100/props.cover}%;` : ``}
    `}
}`;
