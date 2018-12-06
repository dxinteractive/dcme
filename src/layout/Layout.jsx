// @flow
import type {Node} from "react";

import React from "react";
import {Helmet} from "react-helmet";
import {Head} from 'dcme-style';

import "./index.scss";

type Props = {
    children: *
};

export default ({children}: Props): Node => <div>
    <Helmet>
        <title>damienclarke.me</title>
        <meta name="description" content="Software engineer from Melbourne, Australia" />
    </Helmet>
    <Head />
    {children}
</div>;
