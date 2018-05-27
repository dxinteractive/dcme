// @flow
import React from 'react';
import type {ComponentType, Element, Node} from 'react';
import {Box, Column, Grid, Tab, TabSet, Terminal, Text} from 'obtuse';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import Link from 'gatsby-link';
import Markdown from './Markdown';
import Parcel from 'parcels';
import QueryStringHock from 'stampy/lib/hock/QueryStringHock';
import ToggleSet from 'stampy/lib/input/toggleSet/ToggleSet';

import {LogList} from 'parcels-devtools';

import filter from 'unmutable/lib/filter';
import keyArray from 'unmutable/lib/keyArray';
import map from 'unmutable/lib/map';
import pipeWith from 'unmutable/lib/util/pipeWith';

const printParcelState = (state) => {
    return pipeWith(
        state,
        map(ii => ii instanceof Parcel ? ii.data() : ii),
        state => JSON.stringify(state, null, 4),
        ...pipeWith(
            state,
            filter(ii => ii instanceof Parcel),
            keyArray(),
            map(key => (ii) => ii.replace(`"${key}": {`, `"${key}": Parcel {`))
        )
    );
};

type ExampleProps = {
    children?: *,
    description?: Node,
    parcel: Object,
    pathContext: Object,
    query: Object,
    source?: string,
    state?: Object,
    updateQuery: Function
};

const Example = (props: ExampleProps): Node => {
    const {
        children,
        description,
        state,
        parcel,
        pathContext: {
            next,
            previous
        },
        query,
        updateQuery
    } = props;

    // const cleanedSource = source && source
    //     .replace(/{?\/\*nosrc\*\/}?([\s\S]*?){?\/\*endnosrc\*\/}?\n?/gi, '')
    //     .replace(/ className=".*?"/gi, '');

    let tab = query.tab || "state";
    let queryString = query.tab ? `?tab=${tab}` : ``;

    let tabOptions = [
        state && {value: "state", label: "State"},
        {value: "source", label: "Source"},
        parcel.logger() && {value: "logs", label: "Logs"},
        {value: "tree", label: "Tree"}
    ].filter(ii => ii);

    return <div className="Example">
        <div className="Example_prev">
            {previous && <Link className="Button" to={`${previous}${queryString}`}>{"<"} Prev</Link>}
        </div>
        <div className="Example_content">
            {description && <Markdown data={description} />}
            <Box modifier="marginRowKilo">
                <Grid>
                    <Column modifier="6 padding">
                        <Box modifier="marginBottomMega">
                            {children}
                        </Box>
                    </Column>
                    <Column modifier="6 padding">
                        <ToggleSet
                            spruceName="TabSet"
                            toggleSpruceName="Tab"
                            value={tab}
                            onChange={tab => updateQuery({tab})}
                            options={tabOptions}
                        />
                        <Box modifier="marginRowKilo">
                            {tab === "state" && state &&
                                <Terminal>
                                    <pre>{printParcelState(state)}</pre>
                                </Terminal>
                            }
                            {tab === "logs" && parcel.logger() &&
                                <LogList parcel={parcel} />
                            }
                        </Box>
                    </Column>
                </Grid>
            </Box>
            {/*cleanedSource &&
                <Box>
                    <Text element="h3" modifier="strong marginMilli">Example code</Text>
                    <Terminal modifier="code prism">
                        <pre dangerouslySetInnerHTML={{__html: Prism.highlight(cleanedSource, Prism.languages.jsx)}}/>
                    </Terminal>
                </Box>
            */}
        </div>
        <div className="Example_next">
            {next && <Link className="Button" to={`${next}${queryString}`}>Next {">"}</Link>}
        </div>
    </div>
}

const ExampleWithQuery = QueryStringHock()(Example);

export default (component: Object, copy: Object, parcel: Object, rendered: Element<*>): Element<*> => {
    return <ExampleWithQuery
        children={rendered}
        description={copy}
        state={component.state}
        parcel={parcel}
        {...component.props}
    />;
};
