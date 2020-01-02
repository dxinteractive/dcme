// @flow
import styled from 'styled-components';
import {Clickable} from './Clickable';

export const Link = styled(Clickable)`
    color: ${props => props.theme.colors.link};
    text-decoration: none;

    &:hover {
        color: ${props => props.theme.colors.link};
        text-decoration: underline;
    }

    &:focus {
        color: ${props => props.theme.colors.focus};
    }

    &:active {
        color: ${props => props.theme.colors.active};
    }
`;
