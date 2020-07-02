// @flow
import type {Node} from 'react';

import React from 'react';
// $FlowFixMe
import {useEffect} from 'react';
// $FlowFixMe
import {useRef} from 'react';
import Prism from 'prismjs';
import {Prism as PrismStyle} from '../affordance/Prism';

require(`prismjs/components/prism-flow.js`);
require(`prismjs/components/prism-jsx.js`);
require(`prismjs/plugins/line-numbers/prism-line-numbers.js`);
require(`prismjs/plugins/line-numbers/prism-line-numbers.css`);
require(`prismjs/plugins/line-highlight/prism-line-highlight.js`);

type Props = {
    children: string,
    language: string
};

export const CodeHighlight = (props: Props): Node => {
    let {children, language} = props;

    let elementRef = useRef();

    useEffect(() => {
        let elem = elementRef.current;
        if(elem) {
            Prism.highlightElement(elementRef.current);
        }
    }, [children]);

    return <PrismStyle className={`language-${language}`} ref={elementRef}>{children}</PrismStyle>;
};
