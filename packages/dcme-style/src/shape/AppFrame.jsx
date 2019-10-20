// @flow
import type {Node} from 'react';

import React from 'react';
import SpruceClassName from 'react-spruce/lib/SpruceClassName';

type Props = {
    nav?: () => Node,
    pageNav?: () => Node,
    content?: () => Node,
    title?: () => Node,
    modifier?: string
};

type State = {
    open: ?string
};

export default class AppFrame extends React.Component<Props, State> {

    state = {
        open: undefined
    };

    render(): Node {
        let {
            nav,
            pageNav,
            content,
            title,
            modifier = ""
        } = this.props;

        let {open} = this.state;

        let close = () => this.setState({open: undefined});
        let openNav = () => this.setState({open: 'nav'});
        let openPageNav = () => this.setState({open: 'pageNav'});

        let pageNavElements = pageNav ? pageNav() : null;
        let contentElements = content ? content() : null;

        let nonav = nav ? '' : 'noNav';

        return <div className={SpruceClassName({name: "AppFrame", modifier: `${modifier} ${nonav}`})}>
            {nav &&
                <nav className={SpruceClassName({name: "AppFrame_nav", modifier: `${modifier} ${open === 'nav' ? 'open' : ''}`})}>{nav()}</nav>
            }
            <div className={SpruceClassName({name: "AppFrame_content"})}>{contentElements}</div>
            {pageNavElements &&
                <nav className={SpruceClassName({name: "AppFrame_pageNav", modifier: `${modifier} ${open === 'pageNav' ? 'open' : ''}`})}>
                    {pageNavElements}
                </nav>
            }
            <div className={SpruceClassName({name: "AppFrame_header", modifier})}>
                {nav &&
                    <button
                        className={SpruceClassName({name: "Button Button-tall Button-invert AppFrame_header_nav"})}
                        onClick={() => open ? close() : openNav()}
                        children={open == 'nav' ? '[x]' : '[<<]'}
                    />
                }
                {pageNav &&
                    <button
                        className={SpruceClassName({name: "Button Button-tall Button-invert AppFrame_header_pageNav"})}
                        onClick={() => open ? close() : openPageNav()}
                        children={open == 'pageNav' ? '[x]' : '...'}
                    />
                }
                {title &&
                    <div
                        className={SpruceClassName({name: "AppFrame_header_title"})}
                        children={title()}
                    />
                }
            </div>
        </div>;
    }
}
