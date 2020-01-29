// @flow
import type {Node} from 'react';
import React from 'react';
import styled from 'styled-components';

export const Select = styled(({options, ...props}) => <select {...props}>
    {options.map((option: any, key: number): Node => {
        let label = typeof option === 'string' ? option : option.label;
        let value = typeof option === 'string' ? option : option.value;
        return <option key={key} value={value}>{label}</option>;
    })}
</select>)`
    font-family: ${props => props.theme.fonts.monospace};
    padding: 2px;
    color: currentColor;
    font-size: .9rem;
`;
