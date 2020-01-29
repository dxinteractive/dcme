// @flow
import type {Node} from 'react';

import styled from 'styled-components';
import React from 'react';
import Prism from 'prismjs';

require(`prismjs/components/prism-flow.js`);
require(`prismjs/components/prism-jsx.js`);

type Props = {
    children: Node
};

export const Code = styled.span`
    background: ${props => props.theme.colors.bgAlt};
`;

// export const Code = styled((props: Props): Node => {
//     let {children, className} = props;

//     // let language = /language-([a-z]*)/g.exec(className)[1];
//     // let prismLanguage = Prism.languages[language];

//     return children;

//     // let __html = prismLanguage
//     //     ? Prism.highlight(children, prismLanguage, 'language')
//     //     : children;

//     // return <span className={className} dangerouslySetInnerHTML={{__html}} />;
// })`
// `;
