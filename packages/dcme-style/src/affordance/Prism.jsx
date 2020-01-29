// @flow
import styled from 'styled-components';

export const Prism = styled.code`
    font-family: ${props => props.theme.fonts.monospace};

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
            color: ${props => props.theme.colors.copy};
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
`;
