// @flow
import type {Node} from 'react';

import React from 'react';
import {Loader} from 'dcme-style/src/deprecated';

type Props = {
    repo: string
};

type State = {
    fetching: boolean,
    tag_name: ?string
};

export default class GithubVersion extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            fetching: true,
            tag_name: ""
        };

        // fetch(`https://api.github.com/repos/${props.repo}/releases/latest`)
        //     .then(response => response.json())
        //     .then((response) => {
        //         console.log("response", response);
        //         this.setState({
        //             fetching: false,
        //             tag_name: "?"
        //         });
        //     })
        //     .catch(() => {
        //         this.setState({
        //             fetching: false
        //         });
        //     })
    }

    render(): Node {
        return this.state.fetching
            ? <Loader />
            : this.state.tag_name;
    }
}
