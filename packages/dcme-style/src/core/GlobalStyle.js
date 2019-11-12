// @flow
import {createGlobalStyle} from 'styled-components';

import IcoMoonWoff2 from '../fonts/IcoMoon-Free.woff2';
import IcoMoonWoff from '../fonts/IcoMoon-Free.woff';
import IcoMoonTtf from '../fonts/IcoMoon-Free.ttf';

import IcoMoonCustomWoff from '../fonts/custom/fonts/icomoon.woff';
import IcoMoonCustomTtf from '../fonts/custom/fonts/icomoon.ttf';

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    * {
        box-sizing: border-box;
    }

    html {
        font-family: ${props => props.theme.fonts.copy};
        height: 100%;
        line-height: 1.5em;
        position: relative;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-size: 14px;
        @media (min-width:480px) {
            font-size: 16px;
        }
    }

    body {
        background-color: ${props => props.theme.colors.bg};
        color: ${props => props.theme.colors.copy};
        font-family: ${props => props.theme.fonts.copy};
        font-weight: 400;
        height: 100%;
        line-height: 1.5em;
        overflow-x: hidden;
        text-rendering: optimizelegibility;

        &[aria-hidden='true'] {
            overflow: hidden;
        }
    }

    #___gatsby,
    #___gatsby > div {
        height: 100%;
    }

    @font-face {
        font-family: 'IcoMoon';
        src: url('${IcoMoonWoff2}') format('woff2'),
            url('${IcoMoonWoff}') format('woff'),
            url('${IcoMoonTtf}') format('truetype')
    }

    @font-face {
        font-family: 'IcoMoonCustom';
        src: url('${IcoMoonCustomWoff}') format('woff'),
            url('${IcoMoonCustomTtf}') format('truetype')
    }
`;
