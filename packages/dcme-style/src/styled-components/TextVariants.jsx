// @flow
import {Text} from '../affordance/Text';
import styled from 'styled-components';

export const H1 = styled(Text)``;
H1.defaultProps = {
    as: 'h1',
    textStyle: 'h1'
};

export const H2 = styled(Text)``;
H2.defaultProps = {
    as: 'h2',
    textStyle: 'h2'
};

export const H3 = styled(Text)``;
H3.defaultProps = {
    as: 'h3',
    textStyle: 'h3'
};

export const H4 = styled(Text)``;
H4.defaultProps = {
    as: 'h4',
    textStyle: 'h4'
};
