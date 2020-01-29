// @flow
import styled from 'styled-components';
import {space} from 'styled-system';

export const List = styled.ul`
    ${space}
    padding-left: 1.8em;
    position: relative;
    list-style: disc;
`;

export const ListItem = styled.li`
    ol > & {
        list-style-type: decimal;
    }
`;
