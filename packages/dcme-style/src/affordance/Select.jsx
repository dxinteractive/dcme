// @flow
import React from 'react';
import styled from 'styled-components';

export const Select = styled((props) => <select
    className={props.className}
    value={props.value}
    onChange={(event) => props.onChange(event.currentTarget.value)}
    children={props.options.map(({label, value}, key) => <option key={key} value={value}>{label}</option>)}
/>)`
    font-family: ${props => props.theme.fonts.monospace};
    padding: 2px;
    color: currentColor;
    font-size: .9rem;
`;
