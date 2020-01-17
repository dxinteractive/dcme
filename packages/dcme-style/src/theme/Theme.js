// @flow
import type {Node} from 'react';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from '../core/GlobalStyle';

function makeTheme(colors: any): any {
    let monospace = `'Roboto Mono', monospace`;
    let copy = `'Merriweather', serif`;
    let icomoon = `IcoMoon`;
    let icomoonCustom = `IcoMoonCustom`;

    let breakpoints: any = ['575px', '720px', '55rem', '75rem'];

    let fontSizes = {
        h1: `3rem`,
        h2: `2.2rem`,
        h3: `1.9rem`,
        h4: `1.5rem`,
        h5: `1.1rem`,
        p: `1rem`,
        s: `.9rem`
    };

    return {
        breakpoints,
        colors,
        fonts: {
            heading: monospace,
            copy,
            monospace,
            icomoon,
            icomoonCustom
        },
        fontSizes,
        textStyles: {
            h1: {
                color: colors.heading,
                fontFamily: monospace,
                fontSize: fontSizes.h1,
                fontWeight: `700`,
                letterSpacing: `-.02em`,
                overflowWrap: `break-word`,
                lineHeight: '1.2em'
            },
            h2: {
                color: colors.heading,
                fontFamily: monospace,
                fontSize: fontSizes.h2,
                fontWeight: `700`,
                letterSpacing: `-.02em`,
                overflowWrap: `break-word`,
                lineHeight: '1.2em'
            },
            h3: {
                color: colors.heading,
                fontFamily: monospace,
                fontSize: fontSizes.h3,
                fontWeight: `700`,
                letterSpacing: `-.02em`,
                overflowWrap: `break-word`,
                lineHeight: '1.2em'
            },
            h4: {
                color: colors.heading,
                fontFamily: monospace,
                fontSize: fontSizes.h4,
                fontWeight: `700`,
                overflowWrap: `break-word`,
                lineHeight: '1.2em'
            },
            h5: {
                color: colors.heading,
                fontFamily: monospace,
                fontSize: fontSizes.h5,
                fontWeight: `700`,
                overflowWrap: `break-word`,
                lineHeight: '1.2em'
            },
            strong: {
                fontWeight: `700`
            },
            weak: {
                opacity: .7
            },
            monospace: {
                fontFamily: monospace
            },
            copy: {
                fontFamily: copy
            },
            code: {
                fontFamily: monospace,
                fontSize: fontSizes.s,
                backgroundColor: '#eff3fb',
                padding: '.125rem'
            },
            codeLabel: {
                fontFamily: monospace,
                fontSize: fontSizes.s,
                lineHeight: '1em'
            },
            icon: {
                fontFamily: icomoon
            }
        }
    };
}

export const LightTheme = (extendColors = {}) => makeTheme({
    bg: '#ffffff',
    copy: '#233544',
    bgInvert: '#0e151b',
    copyInvert: '#ffffff',
    line: '#EEEEEE',
    outline: '#DDDDDD',
    placeholder: '#CCCCCC',
    link: '#527fd7',
    touch: '#a0a0a0',
    touchHover: '#b4b4b4',
    focus: '#527fd7',
    bgInput: '#ffffff',
    primary: '#527fd7',
    primaryMuted: '#9db7e9',
    secondary: '#e17564',
    tertiary: '#f1dd8b',
    positive: '#38C169',
    negative: '#e85656',
    warning: '#F5A623',
    weightMilli: '#7b8d9c',
    weightMicro: '#c5ccdb',
    terminalPrimary: '#319dcd',
    terminalSecondary: '#ce4133',
    terminalTertiary: '#fee380',
    terminalComment: '#bfadcc',
    buttonBg: '#f4f4f4',
    buttonBgHover: '#ffffff',
    buttonTextFocus: '#527fd7',
    buttonBgInvert: '#0e151b',
    buttonBgHoverInvert: '#333333',
    buttonTextFocusInvert: '#527fd7',
    ...extendColors
});

export const DarkTheme = (extendColors = {}) => makeTheme({
    bg: '#0e151b',
    copy: '#ffffff',
    bgInvert: '#ffffff',
    copyInvert: '#233544',
    line: '#EEEEEE',
    outline: '#DDDDDD',
    link: '#527fd7',
    bgInput: '#0e151b',
    primary: '#527fd7',
    primaryMuted: '#9db7e9',
    secondary: '#e17564',
    tertiary: '#f1dd8b',
    positive: '#38C169',
    negative: '#e85656',
    warning: '#F5A623',
    weightMilli: '#7b8d9c',
    weightMicro: '#c5ccdb',
    terminalPrimary: '#319dcd',
    terminalSecondary: '#ce4133',
    terminalTertiary: '#fee380',
    terminalComment: '#bfadcc',
    buttonBg: '#f4f4f4',
    buttonBgHover: '#f9f9f9',
    ...extendColors
});

type Props = {
    children: Node,
    theme: any
};

export const Theme = (props: Props): Node => {
    return <ThemeProvider theme={props.theme || LightTheme()}>
        <>
            <GlobalStyle />
            {props.children}
        </>
    </ThemeProvider>;
};

export const Head = () => <link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Merriweather" rel="stylesheet" />;
