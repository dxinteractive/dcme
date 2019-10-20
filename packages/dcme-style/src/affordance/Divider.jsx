// @flow
import styled from 'styled-components';

export const Divider = styled.div`
    border-bottom: ${_ => _.theme.colors.line} solid 2px;
    width: 100%;
    padding: 0 1rem;
`;

export const DividerVertical = styled.div`
    border-left: ${_ => _.theme.colors.line} solid 2px;
    height: 100%;
    padding: 1rem 0;
`;
