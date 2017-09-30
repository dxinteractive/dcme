import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../sass/style.scss';

const TemplateWrapper = ({ children }) => {
    return <div>
        <Helmet>
            <title>Damien Clarke</title>
            <meta name="desciption" content="Melbourne-based coder / webdev / music-maker / animator / gamedev." />
            <link href="//fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet" type="text/css" />
        </Helmet>
        {children()}
    </div>;
};

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper
