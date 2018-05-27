// @flow
import React from "react";
import type {Node} from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.scss";

function TemplateWrapper(props: Object): Node {
    const {
        children,
        wrapper = true
    } = props;

    const {allSitePage} = props.data;
    return <div>
        <Helmet
            title="Damien Clarke"
            meta={[
                //{name: "description", content: "Sample"},
                //{name: "keywords", content: "sample, something"}
            ]}
        />
       {children()}
    </div>;
}


export const query = graphql`
    query NavigationQuery {
      allSitePage {
        edges {
          node {
            id
            path
          }
        }
      }
    }
`;

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
