// @flow
import styled from 'styled-components';

export const Prism = styled.code`
    font-family: ${props => props.theme.fonts.monospace};
    color: ${props => props.theme.colors.copyInvert};

    &.language-cpp {
        .token.keyword {
            color: ${props => props.theme.colors.terminalPrimary};
        }

        .token.tag {
            color: ${props => props.theme.colors.terminalSecondary};
        }

        .token.string,
        .token.number,
        .token.boolean {
            color: ${props => props.theme.colors[props.inverted ? 'terminalTertiary' : 'terminalPrimary']};
        }

        .token.comment {
            color: ${props => props.theme.colors.terminalComment};
        }
    }

    &.language-jsx, &.language-js {
        .token.keyword {
            color: ${props => props.theme.colors.terminalSecondary};
        }

        .token.tag {
            color: ${props => props.theme.colors.terminalPrimary};
        }

        .token.string,
        .token.number,
        .token.boolean {
            color: ${props => props.theme.colors[props.inverted ? 'terminalTertiary' : 'terminalPrimary']};
        }

        .token.comment {
            color: ${props => props.theme.colors.terminalComment};
        }

        .token.script {
            color: ${props => props.theme.colors.copyInvert};
        }

        .token.script-punctuation {
            color: ${props => props.theme.colors.terminalPrimary};
        }
    }

    &.language-flow {
        .token.keyword,
        .token.function {
            color: ${props => props.theme.colors.terminalSecondary};
        }

        .token.tag {
            color: ${props => props.theme.colors.terminalPrimary};
        }

        .token.string,
        .token.number,
        .token.boolean {
            color: ${props => props.theme.colors[props.inverted ? 'terminalTertiary' : 'terminalPrimary']};
        }

        .token.comment {
            color: ${props => props.theme.colors.terminalComment};
        }
    }

    &.language-bash {
        .token.comment {
            color: ${props => props.theme.colors.terminalComment};
        }
    }

    .line-highlight {
        animation: .2s ease-out onShow;

        position: absolute;
        left: 0;
        right: 0;
        padding: inherit 0;
        margin-top: 1rem;
        background: rgba(255,255,255,0.1);
        pointer-events: none;
        line-height: inherit;
        white-space: pre;

        @keyframes onShow {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

    }
`;
