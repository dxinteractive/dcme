// @flow
import type {Node} from "react";

import React from "react";
import {Helmet} from "react-helmet";
import {Head} from 'dcme-style';

import "./index.scss";

type Props = {
    children: *,
    title?: string
};

export default ({children, title = ""}: Props): Node => {
    let site = `damienclarke.me`;
    title = title ? `${title} | ${site}` : site;

    return <div>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content="Software engineer from Melbourne, Australia" />
        </Helmet>
        <Head />
        {children}
    </div>;
};
