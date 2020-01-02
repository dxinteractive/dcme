// @flow
import styled from 'styled-components';
import {Clickable} from './Clickable';

export const Touch = styled(Clickable)`
    color: ${props => props.theme.colors.touch};

    &:hover {
        color: ${props => props.theme.colors.touchHover};
    }

    &:focus {
        color: ${props => props.theme.colors.focus};
    }

    &:active {
        color: ${props => props.theme.colors.active};
    }

`;
