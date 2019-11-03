// @flow
import {Box} from '../layout/Layout.jsx';
import styled from 'styled-components';
import {textStyle} from 'styled-system';

export const Paper = styled(Box)`
    ${textStyle}
    ${props => props.bg && `
        background-color: ${props.theme.colors[props.bg]}
    `}
`;
