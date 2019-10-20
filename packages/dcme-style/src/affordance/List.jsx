// @flow
import styled from 'styled-components';
import {space} from 'styled-system';

export const List = styled.ul`
    ${space}
    padding-left: 1.8em;
    position: relative;
`;

export const ListItem = styled.li`
    ul > & {
        &:before {
            content: '*';
            position: absolute;
            left: .6em;
        }
    }

    ol > & {
        list-style-type: decimal;
    }
`;
