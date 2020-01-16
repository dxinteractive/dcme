// @flow
import styled from 'styled-components';
import {space, color, layout, flexbox, position} from 'styled-system';

export const Absolute = styled.div({position: 'absolute'}, space, layout, position);
export const Box = styled.div({display: 'block'}, space, color, layout, flexbox);
export const Flex = styled.div({display: 'flex'}, space, color, layout, flexbox);
export const Fixed = styled.div({position: 'fixed'}, space, layout, position);
export const Stack = styled.div({position: 'relative', width: '100%', height: '100%'}, space, layout, position);
export const StackItem = styled.div({position: 'absolute', width: '100%', height: '100%'}, space, layout, position);
export const Wrapper = styled.div({maxWidth: '65rem', margin: '0 auto'}, space, layout, position);
