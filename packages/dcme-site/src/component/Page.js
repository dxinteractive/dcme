// @flow
import type {Node} from 'react';

import React from 'react';
import Helmet from 'react-helmet';
import {Head} from 'dcme-style/theme';
import {Theme} from 'dcme-style/theme';
import {DarkTheme} from 'dcme-style/theme';
import {LightTheme} from 'dcme-style/theme';
import {Box} from 'dcme-style/layout';
import {mdxComponents} from 'dcme-style/core';
import {MDXProvider} from '@mdx-js/react';

type Props = {
    children: *,
    title: string,
    theme?: string,
    themeParams?: any
};

export default ({children, title, theme = 'dark', themeParams = {}}: Props): Node => {

    const themes = {
        light: LightTheme(themeParams),
        dark: DarkTheme(themeParams)
    };

    return <Box height="100%">
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content="mosfez" />
        </Helmet>
        <Head />
        <MDXProvider components={mdxComponents}>
            <Theme theme={themes[theme]}>
                {children}
            </Theme>
        </MDXProvider>
    </Box>;
};
