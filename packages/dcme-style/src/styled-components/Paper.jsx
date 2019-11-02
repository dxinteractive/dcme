// @flow
import {Box} from '../layout/Layout.jsx';
import styled from 'styled-components';

export const Paper = styled(Box)`
    ${props => props.bg && `
        background-color: ${props.theme.colors[props.bg]}
    `}
`;
