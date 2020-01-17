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
    color: ${props => props.invert ? props.theme.colors.copyInvert : props.theme.colors.copy};
    background-color: ${props => props.invert ? props.theme.colors.buttonBgInvert : props.theme.colors.buttonBg};

    &:hover {
        background-color: ${props => props.invert ? props.theme.colors.buttonBgHoverInvert : props.theme.colors.buttonBgHover};
    }

    &:focus {
        color: ${props => props.invert ? props.theme.colors.buttonTextFocusInvert : props.theme.colors.buttonTextFocus};
    }
`;
