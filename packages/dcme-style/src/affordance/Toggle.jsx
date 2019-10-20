// @flow
import React from 'react';
import styled from 'styled-components';

export const Toggle = styled((props) => <button
    className={props.className}
    onClick={() => props.onChange(!props.value)}
    children={props.children ? `${props.children}\u00A0[${props.value ? 'x' : '\u00A0'}]` : `${props.value ? 'on' : 'off'}`}
/>)`
    border: 1px solid ${props => props.theme.colors.line};
    background-color: ${props => props.theme.colors.bg};
    color: currentColor;
    cursor: pointer;
    font-family: ${props => props.theme.fonts.monospace};
    font-size: .9rem;
    padding: .3rem .8rem;
    min-width: 3.5rem;

    &:focus,
    &:active {
        border-color: ${props => props.theme.colors.primaryMuted};
        outline: 0;
    }

    &::-moz-focus-inner {
        border: 0;
    }
`;
