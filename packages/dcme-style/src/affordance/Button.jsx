// @flow
import styled from 'styled-components';
import {Clickable} from './Clickable';

export const Button = styled(Clickable)`
    display: block;
    padding: .5rem 1rem;
    font-family: ${props => props.theme.fonts.monospace};
    text-decoration: none;
    font-size: .9rem;
    width: 100%;
    text-align: left;
    background-color: ${props => props.theme.colors.buttonBg};

    &:hover {
        background-color: ${props => props.theme.colors.buttonBgHover};
    }

    &:focus {
        color: ${props => props.theme.colors.buttonTextFocus};
    }
`;
