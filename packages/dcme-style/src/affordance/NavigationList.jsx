// @flow
import type {Node} from 'react';

import React from 'react';
import styled from 'styled-components';
import {space} from 'styled-system';
import {Text} from './Text';

export const NavigationList = styled.ul`
    ${space}
    font-family: font('monospace');
    font-size: .9rem;
    padding: 0 1rem 1rem .5rem;
`;

export const NavigationListItem = styled.li``;

export const NavigationListItemTop = styled(({children, ...props}: any): Node => {
    return <Text as="li" textStyle="weak" {...props}>{children}</Text>;
})`
    margin-top: ${props => props.mt ? '1rem' : '0'}
`;

