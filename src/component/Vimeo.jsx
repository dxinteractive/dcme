// @flow

import type {Node} from 'react';

import React from 'react';

type Props = {
    id: string
};

export default ({id}: Props): Node => {
    return <iframe
        src={`https://player.vimeo.com/video/${id}`}
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
    />;
};
