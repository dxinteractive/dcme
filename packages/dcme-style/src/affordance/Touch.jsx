// @flow
import styled from 'styled-components';
import {Clickable} from './Clickable';

export const Touch = styled(Clickable)`
    color: ${props => props.theme.colors[props.invert ? 'touchInvert' : 'touch']};

    &:hover {
        color: ${props => props.theme.colors.touchHover};
    }

    &:focus {
        color: ${props => props.theme.colors[props.invert ? 'focusInvert' : 'focus']};
    }

    &:active {
        color: ${props => props.theme.colors.active};
    }

    ${props => props.disabled && `
        opacity: .5;
    `}

`;
