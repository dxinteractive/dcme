// @flow
import styled from 'styled-components';

export const Pre = styled.pre`
    font-family: ${props => props.theme.fonts.monospace};
    font-size: .8rem;
    line-height: 1.3rem;
    overflow: auto;

    ${props => props.bounded && `
        padding: 1rem;
        background: ${props.theme.colors.bgAlt};
    `}
`;
