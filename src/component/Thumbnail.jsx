// @flow

import type {Node} from 'react';

import React from 'react';

type Props = {
    src: string
};

export default ({src}: Props): Node => {
    return <div className="Thumbnail" style={{backgroundImage: `url(${src})`}} />;
};
