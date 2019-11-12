// @flow
import styled from 'styled-components';
import {Clickable} from './Clickable';

export const Touch = styled(Clickable)`
    color: ${props => props.theme.colors.touch};

    &:focus,
    &:hover {
        color: ${props => props.theme.colors.touchHover};
    }
`;
