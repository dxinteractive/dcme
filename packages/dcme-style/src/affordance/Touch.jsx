// @flow
import styled from 'styled-components';
import {Clickable} from './Clickable';

export const Touch = styled(Clickable)`
    color: ${props => props.theme.colors.touch};

    &:focus {
        color: ${props => props.theme.colors.touchFocus};
    }

    &:hover {
        color: ${props => props.theme.colors.touchHover};
    }
`;
