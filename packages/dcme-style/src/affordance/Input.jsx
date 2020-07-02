// @flow
import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid ${props => props.theme.colors[props.error ? 'negative' : (props.invert ? 'outlineInvert' : 'outline')]};
    border-width: ${props => props.clear ? '0' : '1'};
    background-color: ${props => props.theme.colors[props.invert ? 'bgPre' : 'bgInput']};
    color: currentColor;
    font-family: ${props => props.theme.fonts.monospace};
    font-size: .9rem;
    padding: .3rem .9rem;
    width: ${props => props.width || 'auto'};

    &:focus,
    &:active {
        border-color: ${props => props.theme.colors[props.invert ? 'focusInvert' : 'focus']};
        outline: 0;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &::placeholder {
        color: ${props => props.theme.colors.placeholder};
    }
`;

Input.defaultProps = {
    type: 'text'
};
