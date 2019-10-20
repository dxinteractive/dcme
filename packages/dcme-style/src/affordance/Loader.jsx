// @flow
import styled from 'styled-components';

export const Loader = styled.span`
    display: inline-block;
    width: .4rem;
    &:before {
        animation: textEllipses 500ms infinite step-start;
        content: '';
    }

    @keyframes textEllipses {
        0% {
            content: '.\\a0\\a0';
        }

        10% {
            content: '..\\a0';
        }

        20% {
            content: '...';
        }

        30% {
            content: '\\a0..';
        }

        40% {
            content: '\\a0\\a0.';
        }

        50% {
            content: '\\a0\\a0\\a0';
        }
    }
`;
