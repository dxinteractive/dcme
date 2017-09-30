import React from 'react'
import Link from 'gatsby-link'
import {Paragraph, Text, Wrapper} from 'dcme-style';

const IndexPage = () => {
    return <Wrapper>
        <Text element="h1" modifier="sizeGiga marginBottomGiga">A Heading Am I</Text>
        <Paragraph>Paragraph</Paragraph>
        <Paragraph>Paragraph</Paragraph>
        <Link className="Link" to="/page-2/">Go to paffge 2</Link>
    </Wrapper>;
}

export default IndexPage;