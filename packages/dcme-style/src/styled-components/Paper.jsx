// @flow
import {Box} from '../layout/Layout.jsx';
import styled from 'styled-components';
import {textStyle, typography} from 'styled-system';

export const Paper = styled(Box)`
    ${textStyle}
    ${typography}
    ${props => props.bg && `
        background-color: ${props.theme.colors[props.bg]}
    `}
    ${props => props.invert && `
        background-color: ${props.theme.colors.bgInvert}
        color: ${props.theme.colors.copyInvert}
    `}
    ${props => props.drag && `
        cursor: move;
        padding-left: 1rem;
        position: relative;

        &:after {
            color: ${props.theme.colors.outline};
            content: ".. .. .. ..";
            display: block;
            font-size: 1.2rem;
            left: 0;
            letter-spacing: -.3rem;
            line-height: .45rem;
            position: absolute;
            top: -.3rem;
            left: -.3rem;
            width: 1rem;
        }
    `}
    ${props => props.bordered && `
        border: ${props.theme.colors.line} solid 1px;
    `}
    ${props => props.fadeUp && `
        animation: .3s ease-out onShow;
        position: relative;

        opacity: 1;
        top: 0;

        @keyframes onShow {
            0% {
                opacity: 0;
                top: .25rem;
            }
            100% {
                opacity: 1;
                top: 0;
            }
        }
    `}
`;
