// @flow

import type {Node} from 'react';

import React from 'react';
import {ResponsiveBox} from 'dcme-style/src/deprecated';

type Props = {
    id: string
};

export default ({id}: Props): Node => {
    return <ResponsiveBox modifier="16-9">
        <iframe
            src={`https://player.vimeo.com/video/${id}`}
            frameBorder="0"
            allowFullScreen
        />
    </ResponsiveBox>;
};
