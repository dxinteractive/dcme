import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {Box, Header, Icon, Tab, TabSet, Text} from 'dcme-style';
import SpruceClassName from 'stampy/lib/util/SpruceClassName';

import '../sass/style.scss';

const TabLink = ({className, children, isHomepage, modifier, peer, ...props}) => {

    className = SpruceClassName({
        name: 'Tab',
        modifier: `${modifier || ""} ${isHomepage ? `` : `ruled`}`,
        className,
        peer
    });

    return <Link
        className={className}
        activeClassName="Tab-active"
        {...props}
    >
        <span className="Tab_inner">{children}</span>
    </Link>;
};

const TemplateWrapper = ({children, location}) => {
    let isHomepage = location.pathname === "/";

    return <Box>
        <Helmet>
            <title>Damien Clarke</title>
            <meta name="desciption" content="Melbourne-based coder / webdev / music-maker / animator / gamedev." />
            <link href="//fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet" type="text/css" />
        </Helmet>
        <Box>
            <Header
                title="DamienClarke"
            />
            <Text modifier="center">
                <TabSet>
                    <TabLink isHomepage={isHomepage} to="/code" modifier="first">
                        <Icon peer="Text" modifier="code" /><Text>Apps and Code</Text>
                    </TabLink>
                    <TabLink isHomepage={isHomepage} to="/music">
                        <Icon peer="Text" modifier="headphones" /><Text>Music</Text>
                    </TabLink>
                    <TabLink isHomepage={isHomepage} to="/effects-pedals">
                        <Icon peer="Text" modifier="flash" /><Text>Effects pedals</Text>
                    </TabLink>
                    <TabLink isHomepage={isHomepage} to="/animation">
                        <Icon peer="Text" modifier="movie" /><Text>Animation</Text>
                    </TabLink>
                    <TabLink isHomepage={isHomepage} to="/games">
                        <Icon peer="Text" modifier="gamepad" /><Text>Games</Text>
                    </TabLink>
                    <TabLink isHomepage={isHomepage} to="/about" modifier="last">
                        <Icon peer="Text" modifier="smile" /><Text>Me</Text>
                    </TabLink>
                </TabSet>
            </Text>
        </Box>
        {children()}
    </Box>;
};

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
