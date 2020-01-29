// @flow
import React from 'react';
import {Divider} from '../affordance/Divider';
import {Link} from '../affordance/Link';
import {List} from '../affordance/List';
import {ListItem} from '../affordance/List';
import {Pre} from '../affordance/Pre';
import {Prism} from '../affordance/Prism';
import {Text} from '../affordance/Text';
import {Box} from '../layout/Layout';

export const mdxComponents = {
    a: Link,
    h1: (props) => <Text as="h1" textStyle="h1" my={4} {...props} />,
    h2: (props) => <Text as="h2" textStyle="h2" my={4} {...props} />,
    h3: (props) => <Text as="h3" textStyle="h3" my={4} {...props} />,
    h4: (props) => <Text as="h4" textStyle="h4" my={4} {...props} />,
    h5: (props) => <Text as="h5" textStyle="h5" my={4} {...props} />,
    //img: (props) => <Image maxWidth="100%" {...props} />,
    inlineCode: ({children}) => <Text as="code" textStyle="code">{children}</Text>,
    code: Prism,
    li: ListItem,
    p: ({children}) => <Text as="p" mb={3}>{children}</Text>,
    pre: ({children}) => <Box mb={4}><Pre bounded>{children}</Pre></Box>,
    strong: ({children}) => <Text as="strong" textStyle="strong">{children}</Text>,
    em: ({children}) => <Text as="em" textStyle="em">{children}</Text>,
    // table: Table,
    // th: TableHeadCell,
    ul: ({children}) => <List mt={3} mb={4}>{children}</List>,
    ol: ({children}) => <List as="ol" my={3}>{children}</List>,
    hr: () => <Box my={5}><Divider /></Box>
};
