// @flow
import type {Node} from 'react';

import React from 'react';
// $FlowFixMe
import {useMemo} from 'react';
import Prism from 'prismjs';
import {Prism as PrismStyle} from '../affordance/Prism';

require(`prismjs/components/prism-flow.js`);
require(`prismjs/components/prism-jsx.js`);

type Props = {
    children: string,
    language: string
};

export const CodeHighlight = (props: Props): Node => {
    let {children, language} = props;

    return useMemo((): Node => {
        let prismLanguage = Prism.languages[language];

        let __html = prismLanguage
            ? Prism.highlight(children, prismLanguage, 'language')
            : children;

        return <PrismStyle className={`language-${language}`}>
            <div dangerouslySetInnerHTML={{__html}} />
        </PrismStyle>;
    }, [children, language]);
};
