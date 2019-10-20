// @flow
import React from 'react';
import {Code} from '../affordance/Code';
import {Link} from '../affordance/Link';
import {List} from '../affordance/List';
import {ListItem} from '../affordance/List';
import {Text} from '../affordance/Text';

export const mdxComponents = {
    a: Link,
    em: ({children}) => <Text as="em" textStyle="em" my={3}>{children}</Text>,
    h1: (props) => <Text as="h1" textStyle="h1" my={4} {...props} />,
    h2: (props) => <Text as="h2" textStyle="h2" my={4} {...props} />,
    h3: (props) => <Text as="h3" textStyle="h3" my={4} {...props} />,
    //img: (props) => <Image maxWidth="100%" {...props} />,
    inlineCode: ({children}) => <Text as="code" textStyle="code">{children}</Text>,
    code: ({children}) => <Text as="code">{children}</Text>,
    li: ListItem,
    p: ({children}) => <Text as="p" mb={3}>{children}</Text>,
    pre: Code,
    strong: ({children}) => <Text as="strong" textStyle="strong">{children}</Text>,
    // table: Table,
    // th: TableHeadCell,
    ul: ({children}) => <List my={3}>{children}</List>,
    ol: ({children}) => <List as="ol" my={3}>{children}</List>
};
