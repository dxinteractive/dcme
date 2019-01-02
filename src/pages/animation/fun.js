// @flow
import React from 'react';
import MarkdownPage from '../../component/MarkdownPage';
import Markdown from './fun.mdx';

export default () => <MarkdownPage
    title="Gravel is fun"
    markdown={Markdown}
/>;
