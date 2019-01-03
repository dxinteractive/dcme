// @flow

import type {Node} from 'react';

import React from 'react';
import {ResponsiveBox} from 'dcme-style';

type Props = {
    id: string
};

export default ({id}: Props): Node => {
    return <ResponsiveBox modifier="16-9">
        <iframe
            src={`https://www.youtube.com/embed/${id}?rel=0`}
            frameBorder="0"
            allowFullScreen
        />
    </ResponsiveBox>;
};
