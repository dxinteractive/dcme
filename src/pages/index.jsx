import React from 'react';
import type {Element} from 'react';
import Link from 'gatsby-link';
import {Paragraph, Text, Wrapper} from 'dcme-style';

export default class IndexPage extends React.Component {
	render(): Element<*> {
		return <Wrapper modifier="medium">
	        <Text element="h1" modifier="sizeGiga marginBottomGiga">A Heading Am I</Text>
	        <Paragraph>Paragraph</Paragraph>
	        <Paragraph>Paragraph</Paragraph>
	        <Link className="Link" to="/page-2/">Go to paffge 2</Link>
	    </Wrapper>;
	}
}