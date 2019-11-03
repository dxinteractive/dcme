// @flow
import React from 'react';
import styled from 'styled-components';

export const Input = styled((props) => <input
    type={props.type}
    placeholder={props.placeholder}
    className={props.className}
    value={props.value}
    onChange={(e) => props.onChange(e.currentTarget.value)}
/>)`
    border: 1px solid ${props => props.theme.colors.outline};
    background-color: ${props => props.theme.colors.bgInput};
    color: currentColor;
    font-family: ${props => props.theme.fonts.monospace};
    font-size: .9rem;
    padding: .3rem .8rem;
    width: 100%;

    &:focus,
    &:active {
        border-color: ${props => props.theme.colors.primaryMuted};
        outline: 0;
    }

    &::-moz-focus-inner {
        border: 0;
    }
`;
