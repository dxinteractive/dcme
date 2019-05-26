// @flow
import type {Node} from "react";

import React from "react";
import {Helmet} from "react-helmet";
import {Box} from 'dcme-style';
import {Head} from 'dcme-style';

import "./index.scss";

type Props = {
    children: *,
    title?: string,
    modifier?: string
};

export default ({children, title = "", modifier}: Props): Node => {
    let site = `damienclarke.me`;
    title = title ? `${title} | ${site}` : site;

    return <div>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content="Software engineer from Melbourne, Australia" />
            <script src="//damienclarkeme.disqus.com/embed.js" data-timestamp={new Date()} />
        </Helmet>
        <Head />
        <Box modifier={modifier}>{children}</Box>
    </div>;
};
