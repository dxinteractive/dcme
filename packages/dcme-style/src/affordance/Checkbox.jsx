// @flow
import React from 'react';
import styled from 'styled-components';

export const Checkbox = styled((props) => <input type="checkbox" {...props} />)`
    padding: .3rem .9rem;

    &:focus,
    &:active {
        border-color: ${props => props.theme.colors.focus};
        outline: 0;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &::placeholder {
        color: ${props => props.theme.colors.placeholder};
    }
`;
