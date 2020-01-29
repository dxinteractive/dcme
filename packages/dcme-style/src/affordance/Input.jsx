// @flow
import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid ${props => props.theme.colors[props.error ? 'negative' : 'outline']};
    background-color: ${props => props.theme.colors.bgInput};
    color: currentColor;
    font-family: ${props => props.theme.fonts.monospace};
    font-size: .9rem;
    padding: .3rem .9rem;
    width: ${props => props.width || 'auto'};

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
