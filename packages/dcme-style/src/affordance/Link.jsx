// @flow
import styled from 'styled-components';
import {Clickable} from './Clickable';

export const Link = styled(Clickable)`
    color: ${props => props.theme.colors.link};
    text-decoration: none;

    &:hover,
    &:focus {
        color: ${props => props.theme.colors.link};
        text-decoration: underline;
    }
`;
