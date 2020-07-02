// @flow
import React from 'react';
import styled from 'styled-components';

export const Pre = styled(({lineNumbers, lines, ...props}: any): any => {
    if(lineNumbers) {
        props.className = `${props.className} line-numbers`;
    }
    if(lines) {
        props['data-line'] = lines;
    }
    return <pre {...props} />;
})`
    font-family: ${props => props.theme.fonts.monospace};
    font-size: .8rem;
    line-height: 1.3rem;
    overflow: ${props => props.overflow || 'auto'};
    position: relative;

    ${props => props.bounded && `
        padding: 1rem;
        background: ${props.theme.colors.bgPre};
    `}
`;
