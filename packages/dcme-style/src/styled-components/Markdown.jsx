// @flow
import type {Node} from 'react';
import React from 'react';
import {Box} from '../layout/Layout.jsx';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import {reactMarkdownComponents} from '../core/mdxComponents';

type Props = {
    children: string
};

export const Markdown = styled((props: Props): Node => {
    return <ReactMarkdown renderers={reactMarkdownComponents} source={props.children} />;
})`
`;
